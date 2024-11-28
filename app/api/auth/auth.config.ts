import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@auth/mongodb-adapter'

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      authorization: {
        params: {
          scope: 'read:user user:email repo public_repo',
        },
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and user profile during signin
      if (account && profile) {
        token.accessToken = account.access_token
        token.profile = profile
      }
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      // Send properties to the client
      session.accessToken = token.accessToken
      if (token.profile) {
        session.user = { ...session.user, ...token.profile }
      }
      return session
    },
  },
  debug: true, // Enable debug messages
  secret: process.env.NEXTAUTH_SECRET,
}
