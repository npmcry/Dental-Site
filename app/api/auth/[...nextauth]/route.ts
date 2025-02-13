export const dynamic = 'force-static'
export const runtime = 'edge'

import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // Your credentials configuration
    })
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  }
})

export { handler as GET, handler as POST }