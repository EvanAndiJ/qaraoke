'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from 'next/link'

import NavBar from "./ui/nav/navbar";
import Searchbox from "./ui/searchbox.home";

export default function Home() {

  // extracting data from usesession as session
  const {data: session} = useSession()

  return (
    <main className="flex min-h-screen flex-col items-center">
      {session ? <NavBar/> : null}
      <div className='group mt-4'>
        <h1 className='text-8xl lg:text-9xl font-bold text-yellow-400'>Qaraoke</h1>
        <div className='text-center px-12 m-auto'>
          <h2 className='text-xl font-bold text-blue-500'>Let's sing together</h2>
          <Searchbox/>
          {!session ? <div className=''>
            <Link href='./login' className='button-blue'>Log In </Link>
            <Link href='./signup' className='button-blue '> Sign Up </Link>
          </div> : null}
          {/* <div className=''>
            <Link href='./login' className='button-blue'>Log In </Link>
            <Link href='./signup' className='button-blue '> Sign Up </Link>
          </div> */}
        </div>
      </div>
      
    </main>
  );
}
