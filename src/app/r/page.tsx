  'use client'
  import {useState} from 'react'

  export default function Rooms() {
    const [rooms, setRooms] = useState([])
    const getRooms = async () => {
      const res = await fetch('../api/rooms')
      const rooms = await res.json()
      setRooms(rooms.rooms)
    }
    return (
    <main>
      <h1>Rooms</h1>
      <button onClick={getRooms}>Get Rooms</button>
      {rooms.map(room => (
        // @ts-ignore
        <p key={room.id}>{room.name} - {room.id } </p>
      ))}
    </main>);
  }
