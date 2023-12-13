
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function getRoom() {
    
}
export async function getRooms() {

}

export async function fetchRoomsList() {
  console.log('fetchRoomsList')
    noStore()
    try {
        const data = await sql`
          SELECT rooms.name, rooms.loc, rooms.date, host.name AS host, rooms.id
          FROM rooms
          JOIN users AS host ON rooms.host_id = host.id
          `;
        //   ORDER BY invoices.date DESC
        //   LIMIT 5`;
    
        const roomsList = data.rows
        return roomsList;

      } catch (error) {

        console.error('Database Error:', error);
        throw new Error('Failed to fetch rooms list.');
        
      }
}