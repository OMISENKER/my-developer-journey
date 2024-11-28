import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { Octokit } from '@octokit/rest'
import { authOptions } from '../../auth/auth.config'

// Add type definitions for GitHub events
interface GitHubCommit {
  sha: string;
  message: string;
  distinct: boolean;
}

interface GitHubEventPayload {
  commits?: GitHubCommit[];
  action?: string;
  issue?: { id: number; number: number; state: string; title?: string };
  pull_request?: { id: number; number: number; state: string; title?: string };
  id?: number;
  number?: number;
  state?: string;
  ref_type?: string;
  ref?: string;
}

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: GitHubEventPayload;
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
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

    const octokit = new Octokit({
      auth: token,
    })

    // Get the authenticated user
    const { data: user } = await octokit.users.getAuthenticated()

    // Get the last 30 days of activity
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    // Get user's events
    const { data: events } = await octokit.activity.listEventsForAuthenticatedUser({
      username: user.login,
      per_page: 100,
    })

    // Filter events to last 30 days and transform them
    const recentActivity = events
      .filter((event: GitHubEvent) => new Date(event.created_at) >= thirtyDaysAgo)
      .map((event: GitHubEvent) => ({
        id: event.id,
        type: event.type,
        repo: event.repo.name,
        createdAt: event.created_at,
        details: getEventDetails(event)
      }))
      .slice(0, 10) // Get only the 10 most recent activities

    // Calculate stats
    const stats = events.reduce(
      (acc, event: GitHubEvent) => {
        const eventDate = new Date(event.created_at)
        if (eventDate >= thirtyDaysAgo) {
          switch (event.type) {
            case 'PushEvent':
              acc.totalCommits += (event.payload.commits?.length || 0)
              break
            case 'PullRequestEvent':
              if (event.payload.action === 'opened') {
                acc.totalPRs++
              }
              break
            case 'IssuesEvent':
              if (event.payload.action === 'opened') {
                acc.totalIssues++
              }
              break
          }
        }
        return acc
      },
      { totalCommits: 0, totalPRs: 0, totalIssues: 0 }
    )

    // Calculate daily activity for the progress chart
    const dailyActivity = events.reduce((acc: Record<string, number>, event: GitHubEvent) => {
      const date = new Date(event.created_at).toISOString().split('T')[0]
      if (new Date(date) >= thirtyDaysAgo) {
        acc[date] = (acc[date] || 0) + 1
      }
      return acc
    }, {})

    return NextResponse.json({
      ...stats,
      recentActivity,
      dailyActivity
    })
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub stats' },
      { status: 500 }
    )
  }
}

function getEventDetails(event: GitHubEvent) {
  switch (event.type) {
    case 'PushEvent':
      return `Pushed ${event.payload.commits?.length || 0} commit(s)`
    case 'PullRequestEvent':
      return `${event.payload.action} pull request: ${event.payload.pull_request?.title}`
    case 'IssuesEvent':
      return `${event.payload.action} issue: ${event.payload.issue?.title}`
    case 'CreateEvent':
      return `Created ${event.payload.ref_type} ${event.payload.ref || ''}`
    case 'DeleteEvent':
      return `Deleted ${event.payload.ref_type} ${event.payload.ref}`
    case 'WatchEvent':
      return 'Starred the repository'
    case 'ForkEvent':
      return 'Forked the repository'
    default:
      return event.type.replace('Event', '')
  }
}
