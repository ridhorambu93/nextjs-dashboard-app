import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.SECRET, // To be added
}

const authHandler = NextAuth(options)

export default authHandler
