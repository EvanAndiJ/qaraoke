  'use client'
import Link from 'next/link'

export default function Rooms() {

  // const getRooms = async () => {
  //   const res = await fetch('../api/rooms')
  //   const rooms = await res.json()
  //   setRooms(rooms.rooms)
  // }
  
  return (
  <>
    <h1>Rooms</h1>  
    {/* <button onClick={getRooms}>Get Rooms</button>
    {rooms.map(room => (
      // @ts-expect-error
      <Link href={`/r/${room.name}`} key={room.id}>{room.name} - {room.id } </Link>
    ))} */}
  </>);
}
