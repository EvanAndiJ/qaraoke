'use client'

import Link from "next/link";
import { fetchRoomsList } from "../../lib/data"

export default async function MyRooms({userId} :  {userId: string | string[]}) {
    
    const roomsList = await fetchRoomsList(typeof userId === 'string' ? userId : userId[0])

    return (
        <div>
           {//@ts-ignore
           roomsList.map((room, i) => {
            return (
                <div key={room.id}>
                    <Link href={`/r/${room.name.split(' ').join('')}`}>{room.name}</Link>
                </div>
            )})}
        </div>
    )
}   