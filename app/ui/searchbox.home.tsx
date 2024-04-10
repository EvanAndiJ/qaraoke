'use client'
import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import Image from "next/image"

import { searchAll } from "../lib/actions"

export default function Searchbox() {

    //@ts-expect-error WHY THOUGH?
    const [state, dispatch] = useFormState(searchAll, undefined)
    return (
        <form className='flex justify-center gap-2'>
            <input id='search' type="text" placeholder="Find a Room" 
                className='rounded-sm shadow-inner shadow-gray-300 my-4'/>
            <button className='flex items-center '>
                <Image src={'./magnifying-glass.svg'} alt='Search' width={28} height={24}/>
            </button>
        </form>
    )
    
}