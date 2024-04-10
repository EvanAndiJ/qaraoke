import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';

import { authConfig } from './auth.config';
import {fetchUserByEmail} from './app/lib/data'
import { sql } from '@vercel/postgres';
import type { User } from './app/lib/definitions';

export default NextAuth({
// export const { handler, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
    // @ts-expect-error
      async authorize(credentials, req) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await fetchUserByEmail(email);
            if (!user) return null;
            console.log('---- creds signIn------')
            console.log(user)
            const passwordsMatch = await bcrypt.compare(password, user.password);
  
            if (passwordsMatch) return user;
        }
      }
    })
  ],
});

