import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'
import Navbar from '@/components/Navbar'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyDevJourney',
  description: 'Track your development journey and celebrate your growth',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="min-h-screen bg-gradient-to-r from-blue-200 to-violet-200">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
