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
          <div className="">
            <Link href="/" className="text-xl font-bold text-white px-2 flex auto items-center">
              <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-4xl px-1 pb-1 rounded-lg">{"<>"}</h1>
              <p className="ml-2 text-black">MyDevJourney</p>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {session ? (
              <>
                <Link href="/dashboard" className="text-black bg-gray-100 rounded-md py-2 px-3 hover:bg-[#377BFF] hover:text-white">
                  Dashboard
                </Link>
                <Link href="/goals" className="text-black bg-gray-100 rounded-md py-2 px-3 hover:bg-[#377BFF] hover:text-white">
                  Goals
                </Link>
                <div className="flex items-center space-x-2">
                  
                  <button
                    onClick={() => signOut()}
                    className="text-black bg-gray-100 rounded-md py-2 px-3 hover:bg-[#377BFF] hover:text-white flex auto items-center"
                  >
                    {session.user?.image && (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || 'User'}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    )}
                    <p className="pl-2">Sign out</p>
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => signIn('github')}
                className="bg-white text-white pl-2 py-1 pr-3 rounded-full hover:bg-gray-200 flex items-center"
              >
                <img src="images/gitimgblack.png" alt="gitlogo" className="w-10" />
                <p className="text-black">Sign in with GitHub</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
