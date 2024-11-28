import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/auth.config';
import type { Goal } from '@/models/user';
import { ObjectId } from 'mongodb';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const goalId = params.id;

    // Validate the goal ID
    if (!goalId) {
      return NextResponse.json({ error: 'Invalid goal ID' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('mydevjourney');

    console.log('Attempting to delete goal with ID:', goalId);
    console.log('User email:', session.user.email);

    // First, let's find the user and their goals
    const userWithGoals = await db.collection('users').findOne(
      { email: session.user.email },
      { projection: { goals: 1, email: 1 } }
    );

    console.log('Current user data:', JSON.stringify({
      email: userWithGoals?.email,
      goalsCount: userWithGoals?.goals?.length || 0
    }, null, 2));
    console.log('User goals:', JSON.stringify(userWithGoals?.goals, null, 2));

    // Check if the goal exists
    const goalExists = userWithGoals?.goals?.some(goal => {
      const matches = goal.id === goalId;
      console.log(`Comparing goal ${goal.id} with ${goalId}: ${matches}`);
      return matches;
    });
    console.log('Goal exists:', goalExists);

    if (!goalExists) {
      return NextResponse.json({ error: 'Goal not found for this user' }, { status: 404 });
    }

    // Delete the goal from the user's goals array
    const userResult = await db.collection('users').updateOne(
      { email: session.user.email },
      { $pull: { goals: { id: goalId } } }
    );

    console.log('Update result:', JSON.stringify(userResult, null, 2));

    if (userResult.modifiedCount === 0) {
      return NextResponse.json({ error: 'Goal not found or already deleted' }, { status: 404 });
    }

    // Delete all progress entries for this goal
    const progressResult = await db.collection('progress').deleteMany({
      goalId: goalId
    });

    console.log('Progress deletion result:', JSON.stringify(progressResult, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Goal and related progress deleted successfully',
    });
  } catch (error) {
    console.error('Detailed error:', error);

    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
