import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dash');
      const isOnLogin = nextUrl.pathname.startsWith('/login')
      
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && isOnLogin) {
        return Response.redirect(new URL('/dash', nextUrl));
      }
      return true;
    },
    // jwt({ token, account, user}) {
    //   console.log('------ jwt callback ----')
    //   // if (user) {
    //   //   console.log('token', token)
    //   //   console.log('user', user)
    //   //   console.log('account', account)
    //   // } else { console.log('token', token)}
    //   // // Persist the OAuth access_token and or the user id to the token right after signin
    //   // if (account) {
    //   //   token.accessToken = account.access_token
    //   //   // token.id = profile.id
    //   // }
    //   // return token
    //   return {}
    // },
    // session({session, token}) {
    //   console.log('------ session callback----')
    //   // console.log('sess', session)
    //   // console.log('token', token)
    //   return session
    // }   
  },
  session: {
    maxAge: 24 * 60 * 60,
  },

  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
