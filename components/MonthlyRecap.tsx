'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Pie, Bar } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

interface RecapData {
  mostActiveDay: {
    name: string
    count: number
  }
  languageStats: Record<string, number>
  goalStats: Array<{
    title: string
    completionRate: number
    achievedDays: number
    totalDays: number
  }>
  totalCommits: number
  startDate: string
  endDate: string
}

export function MonthlyRecap({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentPage, setCurrentPage] = useState(0)
  const [recapData, setRecapData] = useState<RecapData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecap = async () => {
      try {
        const response = await fetch('/api/recap')
        const data = await response.json()
        setRecapData(data)
      } catch (error) {
        console.error('Error fetching recap:', error)
      } finally {
        setLoading(false)
      }
    }

    if (isOpen) {
      fetchRecap()
    }
  }, [isOpen])

  const pages = [
    {
      title: 'Most Active Day',
      content: recapData?.mostActiveDay ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Your Most Active Day</h3>
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {recapData.mostActiveDay.name}
          </div>
          <p className="text-gray-600">
            with {recapData.mostActiveDay.count} commits
          </p>
        </div>
      ) : loading ? (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="text-center">
          <p>No data available</p>
        </div>
      )
    },
    {
      title: 'Programming Languages',
      content: recapData?.languageStats ? (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">Language Distribution</h3>
          <div className="w-full max-w-md mx-auto">
            {Object.keys(recapData.languageStats).length > 0 ? (
              <Pie
                data={{
                  labels: Object.keys(recapData.languageStats),
                  datasets: [{
                    data: Object.values(recapData.languageStats),
                    backgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56',
                      '#4BC0C0',
                      '#9966FF',
                    ]
                  }]
                }}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }}
              />
            ) : (
              <p className="text-center text-gray-600">No language data available for this period</p>
            )}
          </div>
        </div>
      ) : loading ? (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="text-center">
          <p>No language data available</p>
        </div>
      )
    },
    {
      title: 'Goal Progress',
      content: recapData?.goalStats ? (
        <div>
          <h3 className="text-2xl font-bold mb-4 text-center">Monthly Goals Progress</h3>
          <div className="space-y-4">
            {recapData.goalStats.length > 0 ? (
              recapData.goalStats.map((goal, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{goal.title}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${goal.completionRate}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {goal.achievedDays} / {goal.totalDays} days completed
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-600">
                <p>No active goals for this period</p>
              </div>
            )}
          </div>
        </div>
      ) : loading ? (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="text-center">
          <p>No goals data available</p>
        </div>
      )
    }
  ]

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-xl p-6">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute right-0 top-0 text-gray-400 hover:text-gray-600"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <Dialog.Title className="text-3xl font-bold text-center mb-8">
              Monthly Recap
            </Dialog.Title>

            {loading ? (
              <div className="text-center py-12">Loading...</div>
            ) : (
              <>
                <div className="min-h-[400px] flex items-center justify-center">
                  {pages[currentPage].content}
                </div>

                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage === 0}
                    className="px-4 py-2 text-sm font-medium text-blue-600 disabled:text-gray-300"
                  >
                    Previous
                  </button>
                  <div className="flex space-x-2">
                    {pages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`w-2 h-2 rounded-full ${
                          currentPage === index ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage === pages.length - 1}
                    className="px-4 py-2 text-sm font-medium text-blue-600 disabled:text-gray-300"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}