'use server'

import {z} from 'zod';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { signIn } from '../../auth';
import { sql } from '@vercel/postgres';
import type { User } from './definitions';
import bcrypt from 'bcrypt'

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
export type State = {
  errors?: {
    username?: string[];
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};
const SignupForm = SignupFormSchema.omit({ id: true, date: true });

export async function signup ( prevState: State, formData: FormData,) {
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

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log('authenticate')
    await signIn('credentials', {...Object.fromEntries(formData), redirectTo:'/dash'});
    
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialsSignin';
    }
    throw error;
  }
}
