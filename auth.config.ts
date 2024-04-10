//?@ts-expect-error
// import type { NextAuthConfig } from 'next-auth';


export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    //?@ts-expect-error
    // async signIn({ user, account, profile, email, credentials }) {
      //@ts-ignore
    async signIn(data) {
      const {user, account, credentials} = data
      console.log('signIn call', user)
      return true
    },
    //@ts-expect-error
    authorized({ auth, request: { nextUrl } }) {
      console.log('authrized call')
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dash');
      const isOnLogin = nextUrl.pathname.startsWith('/login')
      
      if (isOnDashboard) {
        if (isLoggedIn) {
          if (!nextUrl.search) {
            if (auth.user?.id && !nextUrl.search) {
              nextUrl.searchParams.set('id', auth.user?.id)
              nextUrl.searchParams.id = auth.user?.id
              return Response.redirect(new URL(nextUrl.href, nextUrl));
            }
          }
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } 
      // if (isLoggedIn && isOnLogin) {
        // return Response.redirect(new URL(`/dash`, nextUrl));
      // }
      return true;
    },
    //@ts-expect-error
    session({session, token, user}) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    }   
  },
  session: {
    maxAge: 24 * 60 * 60,
  },

  providers: [], // Add providers with an empty array for now
// } satisfies NextAuthConfig;
} 
