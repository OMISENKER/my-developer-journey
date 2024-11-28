import NextAuth from 'next-auth'
import { authOptions as baseAuthOptions } from '../auth.config'
import GithubProvider from 'next-auth/providers/github'
import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@auth/mongodb-adapter'

export const authOptions = {
  ...baseAuthOptions,
  // Add any additional configuration specific to this route if needed
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
