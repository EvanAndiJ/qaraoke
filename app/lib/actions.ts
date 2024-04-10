'use server'

import {z} from 'zod';
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { sql } from '@vercel/postgres';

import signIn  from '../../auth';
// import { signIn } from "next-auth/react

import type { User } from './definitions';



const SignupFormSchema = z.object({
  // id: z.string(),
  username: z.string({
    invalid_type_error: 'Please enter a username.',
  }),
  email: z.string({
    invalid_type_error: 'Please enter an email address.',
  }),
  password: z.string({
    invalid_type_error: 'Please enter a password.',
  }),
  // name: z.string({
  //   invalid_type_error: 'Please enter a password.',
  // }),
  date: z.string(),
});
export type SignUpFormState = {
  errors?: {
    username?: string[];
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};
const SignupForm = SignupFormSchema.omit({ id: true, date: true });
export async function signup ( prevState: SignUpFormState, formData: FormData,) {
  console.log('signup')
  const validatedFields = SignupForm.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    console.log('fields bad', validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to signup user.',
    };
  }

  const {username, email, password} = validatedFields.data
  const date = new Date().toISOString();

  const prevEmail = await sql<User>`SELECT * FROM users WHERE email=${email}`;
  if (prevEmail.rows.length) { console.log('prev email'); 
    return {errors: {}, message: 'email already registered'}
  }

  const prevUser = await sql<User>`SELECT * FROM users WHERE username=${username}`;
  if (prevUser.rows.length) { console.log('prev user'); 
    return {errors: {}, message: 'Username unavailable'}
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    await sql`
    INSERT INTO users (username, email, password, created, updated)
    VALUES (${username}, ${email}, ${hashedPassword}, ${date}, ${date})
    `;
    console.log('signed up') 

  } catch (error) {
    console.log(error)
    return {message: 'error creating user'};
  }

  revalidatePath('/');
  redirect('/login'); 
}

// ** CREATE ROOM **
export type CreateRoomState = {
  errors?: {
    hostId?: string[];
    name?: string[];
    loc?: string[];
    date?: string[];
  };
  message?: string | null;
};
const CreateRoomFormSchema = z.object({
  // id: z.string(),
  hostId: z.string(),
  name: z.string({
    invalid_type_error: 'Please enter a name for your room.',
  }),
  loc: z.string({
    invalid_type_error: 'Please enter a location.',
  }),
  date: z.string({
    invalid_type_error: 'Please enter a date.',
  }),
});  
// const CreateRoom = CreateRoomFormSchema.omit({ id: true });
export async function createRoom(prevState: CreateRoomState, formData: FormData) {
  
  const validatedFields = CreateRoomFormSchema.safeParse({
    hostId: formData.get('hostId'),
    name: formData.get('name'),
    loc: formData.get('loc'),
    date: formData.get('date'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Room.',
    };
  }

  const { hostId, name, loc, date } = validatedFields.data;
  // const amountInCents = amount * 100;
  // const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
    INSERT INTO rooms (host_id, name, loc, date)
    VALUES (${hostId}, ${name}, ${loc}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/dash/rooms');
  redirect('/dash/rooms');
}

// ** SEARCH ** 
const SearchAllSchema = z.object({
  search: z.string()
})
export type SearchAllState = {
  errors?: {
    search?: string[];
  };
  message?: string | null;
};
export async function searchAll(prevState: SearchAllState, formData: FormData ) {
  const validatedFields = SearchAllSchema.safeParse({
    search: formData.get('search'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Room.',
    };
  }
  const {search} = validatedFields.data


  try {
    await sql`
      FIND * FROM rooms
      WHERE name = ${search.trim()}
    `
  } catch (error) {
    return {
      error,
      message: "something went wrong",
    }
  }
}