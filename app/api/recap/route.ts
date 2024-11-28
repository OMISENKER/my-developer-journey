import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { Octokit } from '@octokit/rest'
import { authOptions } from '../auth/auth.config'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    console.log('Session details:', {
      hasSession: !!session,
      hasUser: !!session?.user,
      email: session?.user?.email,
      name: session?.user?.name,
      accessToken: session?.accessToken ? 'Present' : 'Missing',
      sessionKeys: session ? Object.keys(session) : []
    })

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized - No session' },
        { status: 401 }
      )
    }

    const token = session.accessToken
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized - No access token' },
        { status: 401 }
      )
    }

    console.log('Initializing Octokit')
    const octokit = new Octokit({
      auth: token,
    })

    // Get the authenticated user first
    console.log('Getting authenticated user')
    const { data: user } = await octokit.users.getAuthenticated()
    console.log('Authenticated as:', user.login)

    const client = await clientPromise
    const db = client.db('mydevjourney')

    // Get the first day of current month
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)

    console.log('Fetching events for user:', user.login)
    const { data: events } = await octokit.activity.listEventsForAuthenticatedUser({
      username: user.login,
      per_page: 100,
    })

    console.log('Successfully fetched events:', events.length)

    // Filter push events within the month
    const monthlyCommits = events
      .filter((event: any) => {
        const eventDate = new Date(event.created_at)
        return (
          event.type === 'PushEvent' &&
          eventDate >= startOfMonth &&
          eventDate <= endOfMonth
        )
      })
      .flatMap((event: any) => (event.payload?.commits || []))

    // Calculate most active day
    const commitsByDay = monthlyCommits.reduce((acc, commit) => {
      const date = new Date(commit.created_at || new Date())
      const day = date.toLocaleDateString('en-US', { weekday: 'long' })
      acc[day] = (acc[day] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const mostActiveDay = Object.entries(commitsByDay).reduce(
      (max: { name: string; count: number }, [day, count]: [string, number]) => {
        return count > max.count ? { name: day, count } : max
      },
      { name: 'No activity', count: 0 }
    )

    // Get goals from database
    const goals = await db
      .collection('goals')
      .find({
        userId: session.user?.email,  // Using email as a stable identifier
        status: { $ne: 'completed' }
      })
      .toArray()

    // Calculate goal statistics
    const goalStats = goals.map(goal => ({
      id: goal._id.toString(),
      title: goal.title,
      progress: goal.progress || 0,
      target: goal.target || 100,
      category: goal.category
    }))

    // Calculate language statistics (mocked for now)
    const languageStats = {
      JavaScript: 45,
      TypeScript: 35,
      Python: 20
    }

    return NextResponse.json({
      mostActiveDay,
      languageStats,
      goalStats,
      totalCommits: monthlyCommits.length,
      startDate: startOfMonth,
      endDate: endOfMonth
    })
  } catch (error) {
    console.error('Fatal error in recap endpoint:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    })
    
    return NextResponse.json({ 
      error: 'Error fetching GitHub data',
      details: error instanceof Error ? error.message : 'Unknown error',
      mostActiveDay: { name: 'No activity', count: 0 },
      languageStats: {},
      goalStats: [],
      totalCommits: 0,
      startDate: new Date(),
      endDate: new Date()
    }, { status: 500 })
  }
}