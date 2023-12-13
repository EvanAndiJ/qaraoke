// The root layout replaces the _app.js and _document.js files 

import './globals.css'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Qaraoke',
  description: 'The Easy Way to Sing',
}

import NextAuthProvider from './ui/session-provider'

export default function RootLayout({ children }:{children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NextAuthProvider> */}
          {children}
        {/* </NextAuthProvider> */}

      </body>
    </html>
  )
}

