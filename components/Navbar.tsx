'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            MyDevJourney!
          </Link>

          <div className="flex items-center space-x-4">
            {session ? (
              <>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard!
                </Link>
                <Link href="/goals" className="text-gray-600 hover:text-gray-900">
                  Goals!
                </Link>
                <div className="flex items-center space-x-2">
                  {session.user?.image && (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || 'User'}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <button
                    onClick={() => signOut()}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Sign out!
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => signIn('github')}
                className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Sign in with GitHub!
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
