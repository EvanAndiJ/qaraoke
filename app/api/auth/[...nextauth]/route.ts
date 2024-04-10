import NextAuth from "next-auth"
// importing providers
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

import { authConfig } from '../../../../auth.config';
// import { handler } from '../../../../auth';

import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import {fetchUserByEmail, fetchUserByUsername} from '../../../lib/data'


export const handler = NextAuth({
    ...authConfig,
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID as string,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        //   }),
      Credentials({
      // @ts-expect-error
        async authorize(credentials) {
          console.log('authorize call')
            const parsedCredentials = z
            // .object({ email: z.string().email(), password: z.string().min(6) })
            .object({ username: z.string(), password: z.string().min(6) })
            .safeParse(credentials);
          if (parsedCredentials.success) {
              const { username, password } = parsedCredentials.data;
              // const user = await fetchUserByEmail(email);
              const user = await fetchUserByUsername(username);
              if (!user) return null;
              const passwordsMatch = await bcrypt.compare(password, user.password);
    
              if (passwordsMatch) return user;
          }
        }
      })
    ],
  });

export { handler as GET, handler as POST }
