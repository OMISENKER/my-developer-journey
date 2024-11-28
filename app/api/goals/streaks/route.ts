import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/auth.config'
import { ObjectId } from 'mongodb'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db()
    
    // Get user's goals and progress
    const user = await db.collection('users').findOne({ email: session.user?.email })
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const goals = user.goals || []
    const progress = await db.collection('progress')
      .find({ goalId: { $in: goals.map(g => g.id) } })
      .sort({ date: -1 })
      .toArray()

    // Calculate streaks for each goal
    const streaks = goals.map(goal => {
      let currentStreak = 0
      let lastDate = new Date()

      // Sort progress by date in descending order
      const goalProgress = progress
        .filter(p => p.goalId === goal.id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

      // Calculate current streak
      for (const p of goalProgress) {
        const progressDate = new Date(p.date)
        const dayDiff = Math.floor(
          (lastDate.getTime() - progressDate.getTime()) / (1000 * 60 * 60 * 24)
        )

        if (dayDiff <= 1 && p.achieved) {
          currentStreak++
          lastDate = progressDate
        } else {
          break
        }
      }

      return {
        goalId: goal.id,
        title: goal.title,
        currentStreak
      }
    })

    return NextResponse.json(streaks)
  } catch (error) {
    console.error('Error fetching goal streaks:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
