'use client'
import { fetchRoomsList } from "../../lib/data"
// import { useSession } from 'next-auth/react';

export default async function RoomsList() {
    // const { data: session, status } = useSession();
    // console.log(session, status)
    const roomsList = await fetchRoomsList()

    return (
        <div>
           {//@ts-ignore
           roomsList.map((room, i) => {
            return (
                <div key={room.id}>
                    {room.name} - 
                    {room.host}
                </div>
            )})}
        </div>
    )
}