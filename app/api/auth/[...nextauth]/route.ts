import NextAuth from "next-auth"

// import { authOptions } from "..//auth"
import { authConfig } from '../../../../auth.config';


const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }