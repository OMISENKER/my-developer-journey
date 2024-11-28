import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function GET() {
  try {
    const session = await getServerSession()
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const client = await clientPromise
    const db = client.db('mydevjourney')
    const goals = await db
      .collection('users')
      .findOne(
        { email: session.user?.email },
        { projection: { goals: 1 } }
      )

    return NextResponse.json(goals?.goals || [])
  } catch (error) {
    console.error('Error fetching goals:', error)
    return NextResponse.json(
      { error: 'Failed to fetch goals' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const goal = await request.json()
    const newGoal = {
      ...goal,
      id: new ObjectId().toString(),
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const client = await clientPromise
    const db = client.db('mydevjourney')
    
    await db.collection('users').updateOne(
      { email: session.user?.email },
      { 
        $push: { goals: newGoal },
        $setOnInsert: {
          email: session.user?.email,
          name: session.user?.name,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      },
      { upsert: true }
    )

    return NextResponse.json(newGoal)
  } catch (error) {
    console.error('Error creating goal:', error)
    return NextResponse.json(
      { error: 'Failed to create goal' },
      { status: 500 }
    )
  }
}
