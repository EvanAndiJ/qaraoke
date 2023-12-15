'use client'

import { fetchRoomsList } from "../../lib/data"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default async function RoomsList() {
    // const { data: session, status } = useSession();
    // console.log(session, status)
    const roomsList = await fetchRoomsList()
    const searchParams = useSearchParams();
    // const pathname = usePathname();

    // console.log(pathname)
    // console.log(searchParams)

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