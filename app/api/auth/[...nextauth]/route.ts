import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET, // To be added
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }
