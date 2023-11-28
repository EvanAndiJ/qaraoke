'use server'

import {z} from 'zod';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { cache } from 'react';
import { signIn } from '../../auth';
import { sql } from '@vercel/postgres';
import type { User } from './definitions';



// const bcrypt = require("bcryptjs");
import bcrypt from 'bcrypt'
const jwt = require("jsonwebtoken");

// const db = require("./db/models");
// const Op = db.Op 
// const User = db.user;

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
  name: z.string({
    invalid_type_error: 'Please enter a password.',
  }),
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
  const validatedFields = SignupForm.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to signup user.',
    };
  }

  const {username, email, password} = validatedFields.data
  const date = new Date().toISOString().split('T')[0];

  // try {
  //   const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
  //   return user.rows[0];
  // } catch (error) {
  //   console.error('Failed to fetch user:', error);
  //   throw new Error('Failed to fetch user.');
  // }
  // const prevEmail = await User.findOne({ where: { email: {[Op.iLike]: email } } })
  // if (prevEmail) { throw new Error('email already registered')}
  const prevEmail = await sql<User>`SELECT * FROM users WHERE email=${email}`;
  if (prevEmail.rows.length) { return {errors: {}, message: 'email already registered'}}

  // const prevUser = await User.findOne({ where: {username: {[Op.iLike]: username}s }})
  // if (prevUser) { new Error('Username unavailable')}
  const prevUser = await sql<User>`SELECT * FROM users WHERE username=${username}`;
  if (prevUser.rows.length) { return {errors: {}, message: 'Username unavailable'}}

  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    // const user = await User.create({
    //   username: username,
    //   email: email,
    //   password: bcrypt.hashSync(password ? password : '', 8)
    // })
    await sql`
    INSERT INTO users (username, email, password, date)
    VALUES (${username}, ${email}, ${hashedPassword}, ${date})
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
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialsSignin';
    }
    throw error;
  }
}
