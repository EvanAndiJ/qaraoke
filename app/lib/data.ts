// 'use server'
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import type { User } from '../lib/definitions';



export async function fetchUserByUsername(username: string): Promise<User | undefined> {

  try {
    const user = await sql<User>`SELECT * FROM users WHERE username=${username}`;
    // console.log('fetchUser', user)
    return user.rows[0];
     
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
export async function fetchUserByEmail(email: string): Promise<User | undefined> {

  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    // console.log('fetchUser', user)
    return user.rows[0];
     
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchUserById(userId : string) {

  try {
    const user = await sql<User>`SELECT * FROM users WHERE id=${userId}`;
    // console.log('fetchUserById', user)
    return user.rows[0];
     
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getRoom() {
    
}
export async function getRooms() {

}

export async function fetchRoomsList(userId : string) {
    noStore()
    // console.log('fetch Roomlist', userId)
    try {
        const data = await sql`
          SELECT rooms.name, rooms.loc, rooms.date, host.name AS host, rooms.id
          FROM rooms
          JOIN users AS host ON rooms.host_id = host.id
          WHERE host_id = ${userId}
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