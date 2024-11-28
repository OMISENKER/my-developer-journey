'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import type { Goal } from '@/models/user'

export default function Goals() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [goals, setGoals] = useState<Goal[]>([])
  const [showNewGoalForm, setShowNewGoalForm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    targetMetric: {
      type: 'commits',
      count: 2,
      period: 'daily'
    }
  })

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch('/api/goals')
        if (response.ok) {
          const data = await response.json()
          setGoals(data)
        }
      } catch (error) {
        console.error('Error fetching goals:', error)
      }
    }

    if (status === 'authenticated') {
      fetchGoals()
    }
  }, [status])

  const handleDelete = async (goalId: string) => {
    if (isDeleting || !confirm('Are you sure you want to delete this goal?')) {
      return
    }

    setIsDeleting(true)
    try {
      const response = await fetch(`/api/goals/${goalId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        setGoals(goals.filter(goal => goal.id !== goalId))
      } else {
        const error = await response.json()
        alert(error.message || 'Failed to delete goal')
      }
    } catch (error) {
      console.error('Error deleting goal:', error)
      alert('Failed to delete goal')
    } finally {
      setIsDeleting(false)
    }
  }

  if (status === 'unauthenticated') {
    router.push('/')
    return null
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGoal),
      })

      if (response.ok) {
        const goal = await response.json()
        setGoals([...goals, goal])
        setShowNewGoalForm(false)
        setNewGoal({
          title: '',
          description: '',
          targetMetric: {
            type: 'commits',
            count: 2,
            period: 'daily'
          }
        })
      }
    } catch (error) {
      console.error('Error creating goal:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Development Goals</h1>
        <button
          onClick={() => setShowNewGoalForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Goal
        </button>
      </div>

      {showNewGoalForm && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Create New Goal</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
                <input
                  type="text"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
                <textarea
                  value={newGoal.description}
                  onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                  required
                />
              </label>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Metric Type
                  <select
                    value={newGoal.targetMetric.type}
                    onChange={(e) =>
                      setNewGoal({
                        ...newGoal,
                        targetMetric: { ...newGoal.targetMetric, type: e.target.value as 'commits' | 'prs' | 'issues' }
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="commits">Commits</option>
                    <option value="prs">Pull Requests</option>
                    <option value="issues">Issues</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Target Count
                  <input
                    type="number"
                    value={newGoal.targetMetric.count}
                    onChange={(e) =>
                      setNewGoal({
                        ...newGoal,
                        targetMetric: { ...newGoal.targetMetric, count: parseInt(e.target.value) }
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    min="1"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Period
                  <select
                    value={newGoal.targetMetric.period}
                    onChange={(e) =>
                      setNewGoal({
                        ...newGoal,
                        targetMetric: { ...newGoal.targetMetric, period: e.target.value as 'daily' | 'weekly' | 'monthly' }
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowNewGoalForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Create Goal
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white p-6 rounded-lg shadow-md relative">
            <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
            <p className="text-gray-600 mb-4">{goal.description}</p>
            <div className="text-sm text-gray-500 mb-4">
              Target: {goal.targetMetric.count} {goal.targetMetric.type} per {goal.targetMetric.period}
            </div>
            <button
              onClick={() => handleDelete(goal.id)}
              disabled={isDeleting}
              className={`absolute top-4 right-4 p-2 rounded-full hover:bg-red-50 transition-colors duration-200 group ${
                isDeleting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              title="Delete goal"
            >
              <svg
                className="w-5 h-5 text-red-500 group-hover:text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {goals.length === 0 && !showNewGoalForm && (
        <div className="text-center py-12">
          <p className="text-gray-600">You haven't set any goals yet. Click "Add New Goal" to get started!</p>
        </div>
      )}
    </div>
  )
}
