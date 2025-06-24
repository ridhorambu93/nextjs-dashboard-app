import NextAuth from "next-auth"

import { authOptions } from "@/authOptions"

const {
  handlers: { GET, POST },
} = NextAuth(authOptions)

export { GET, POST }
