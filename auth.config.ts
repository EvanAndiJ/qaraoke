import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {

      console.log(`------authorized callback ${Date.now()}------`)
      console.log(`auth`, auth)
      // console.log(`request`, nextUrl)

      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dash');
      const isOnLogin = nextUrl.pathname.startsWith('/login')
      
      if (isOnDashboard) {
        if (isLoggedIn) {
          if (!nextUrl.search) {
            console.log('no id', nextUrl)
            if (auth.user?.id && !nextUrl.search) {
              console.log('setting')
              nextUrl.searchParams.set('id', auth.user?.id)
              //@ts-expect-error
              nextUrl.searchParams.id = auth.user?.id
              console.log(nextUrl) 
              return Response.redirect(new URL(nextUrl.href, nextUrl));
            }
          }
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } 
      if (isLoggedIn && isOnLogin) {
        // return Response.redirect(new URL(`/dash`, nextUrl));
      }
      return true;
    },
    jwt({ token, account, user}) {
      console.log('------ jwt callback ----')
      if (user) {
        console.log('token', token)
        console.log('user', user)
        console.log('account', account)
        // token.userId = user.id
      } else { console.log('token', token)}
      // Persist the OAuth access_token and or the user id to the token right after signin
      // if (account) {
      //   token.accessToken = account.access_token
      //   // token.id = profile.id
      // }
      return token
    },
    session({session, token}) {
      console.log('------ session callback----')
      console.log('sess', session)
      console.log('token', token)
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      console.log('sess + id', session)
      return session
    }   
  },
  session: {
    maxAge: 24 * 60 * 60,
  },

  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
