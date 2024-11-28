'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MonthlyRecap } from '../../components/MonthlyRecap'
import Image from 'next/image'
import Link from 'next/link'

interface GitHubStats {
  totalCommits: number;
  totalPRs: number;
  totalIssues: number;
  recentActivity: Array<{
    id: string;
    type: string;
    repo: string;
    createdAt: string;
    details: string;
  }>;
  dailyActivity: Record<string, number>;
}

interface GoalStreak {
  goalId: string;
  title: string;
  currentStreak: number;
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [streaks, setStreaks] = useState<GoalStreak[]>([])
  const [isRecapOpen, setIsRecapOpen] = useState(false)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsResponse, streaksResponse] = await Promise.all([
          fetch('/api/github/stats'),
          fetch('/api/goals/streaks')
        ])
        
        const statsData = await statsResponse.json()
        const streaksData = await streaksResponse.json()
        
        setStats(statsData)
        setStreaks(streaksData)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }

    if (session) {
      fetchData()
    }
  }, [session])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getWeeklyStats = () => {
    if (!stats?.dailyActivity) return []

    const today = new Date()
    const weeks: { dates: string[]; total: number }[] = []
    
    // Get the last 4 weeks
    for (let i = 0; i < 4; i++) {
      const weekStart = new Date(today)
      weekStart.setDate(today.getDate() - (i * 7 + 6))
      
      const weekDates = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(weekStart)
        date.setDate(weekStart.getDate() + index)
        return date.toISOString().split('T')[0]
      })

      const weekTotal = weekDates.reduce((sum, date) => 
        sum + (stats.dailyActivity[date] || 0), 0
      )

      weeks.unshift({ dates: weekDates, total: weekTotal })
    }

    return weeks
  }

  const getActivityLevel = (count: number) => {
    if (count === 0) return 'bg-gray-100'
    if (count <= 2) return 'bg-green-200'
    if (count <= 5) return 'bg-green-300'
    if (count <= 8) return 'bg-green-400'
    return 'bg-green-500'
  }

  const calculateTrend = () => {
    const weeks = getWeeklyStats()
    if (weeks.length < 2) return 'neutral'
    
    const currentWeek = weeks[weeks.length - 1].total
    const previousWeek = weeks[weeks.length - 2].total
    
    if (currentWeek > previousWeek) return 'up'
    if (currentWeek < previousWeek) return 'down'
    return 'neutral'
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  const weeks = getWeeklyStats()
  const trend = calculateTrend()

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome back, {session?.user?.name}!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Commits</h3>
            <p className="text-3xl font-bold">{stats?.totalCommits || 0}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Pull Requests</h3>
            <p className="text-3xl font-bold">{stats?.totalPRs || 0}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Issues</h3>
            <p className="text-3xl font-bold">{stats?.totalIssues || 0}</p>
          </div>
        </div>
        

        <Link
          href="/goals"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Manage Goals
        </Link>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center bg-gradient-to-r from-[#377bff] to-violet-400 p-10 rounded-lg relative">
        <Image src={"assets/dev.svg"} alt="flower" width={180} height={200} className="absolute left-56"/>
        <div className="h-36 w-36 rounded-full aspect-square bg-gradient-to-r from-pink-600 to-pink-400 absolute right-5 bottom-5 blur-lg opacity-40
        "/>
        <h1 className="text-white text-2xl font-bold">{session?.user?.name}, Your Monthly DevWrapped is here!</h1>
        <div className="flex gap-8 items-center justify-center">
          {/* <Image src={"assets/dev.svg"} alt="developer" width={100} height={80}/> */}
        <button
        onClick={() => setIsRecapOpen(true)}
        className="bg-white h-12 text-[#377bff] font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-white to-white hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-400 hover:text-white transition-colors ease-linear delay-450 duration-500"
      >
        View My Developer Journey Monthly Wrapped 
      </button></div>
        
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Goal Streaks 🔥</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {streaks.map((streak) => (
            <div
              key={streak.goalId}
              className="bg-gray-50 p-4 rounded-lg flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {streak.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-orange-500">
                  {streak.currentStreak}
                </span>
                <span className="text-gray-600">
                  {streak.currentStreak === 1 ? 'day' : 'days'}
                </span>
              </div>
            </div>
          ))}
          {streaks.length === 0 && (
            <p className="text-gray-600 col-span-full text-center">
              No active goals. <Link href="/goals" className="text-blue-500 hover:underline">Create a goal</Link> to start tracking your progress!
            </p>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        {stats?.recentActivity && stats.recentActivity.length > 0 ? (
          <div className="space-y-4">
            {stats.recentActivity.map((activity) => (
              <div key={activity.id} className="border-l-4 border-blue-500 pl-4">
                <div className="text-sm text-gray-500">{formatDate(activity.createdAt)}</div>
                <div className="font-medium">{activity.details}</div>
                <div className="text-sm text-gray-600">{activity.repo}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No recent activity found.</p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Progress Overview</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Trend:</span>
            {trend === 'up' && (
              <span className="text-green-500 flex items-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="ml-1">Increasing</span>
              </span>
            )}
            {trend === 'down' && (
              <span className="text-red-500 flex items-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                </svg>
                <span className="ml-1">Decreasing</span>
              </span>
            )}
            {trend === 'neutral' && (
              <span className="text-gray-500 flex items-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                </svg>
                <span className="ml-1">Stable</span>
              </span>
            )}
          </div>
        </div>

        {stats?.dailyActivity ? (
          <div className="space-y-6">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>
                    Week {weekIndex + 1} ({new Date(week.dates[0]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(week.dates[6]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})
                  </span>
                  <span className="font-medium">
                    {week.total} activities
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {week.dates.map((date) => {
                    const count = stats.dailyActivity[date] || 0
                    return (
                      <div key={date} className="aspect-square">
                        <div
                          className={`w-full h-full rounded-md ${getActivityLevel(count)} transition-colors duration-200 cursor-help`}
                          title={`${new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}: ${count} activities`}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Activity Level:</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 bg-gray-100 rounded-sm"></div>
                  <div className="w-4 h-4 bg-green-200 rounded-sm"></div>
                  <div className="w-4 h-4 bg-green-300 rounded-sm"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                None → High
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg">
            <div className="text-gray-500">Loading activity data...</div>
          </div>
        )}
        <MonthlyRecap isOpen={isRecapOpen} onClose={() => setIsRecapOpen(false)} />
      </div>
    </div>
  )
}
