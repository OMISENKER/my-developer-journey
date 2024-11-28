import { getServerSession } from 'next-auth'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession()

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center ">
      <h1 className="text-4xl font-bold mb-6">
        Track Your Developer Journey
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Set meaningful coding goals, track your GitHub activity, and celebrate your growth with quarterly insights.
      </p>
      
      {!session ? (
        <div className="space-y-4">
          <p className="text-gray-600">
            Sign in with GitHub to start tracking your journey
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <Link
            href="/dashboard"
            className="bg-[#377BFF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            Go to Dashboard
          </Link>
        </div>
      )}
    </div>
  )
}
