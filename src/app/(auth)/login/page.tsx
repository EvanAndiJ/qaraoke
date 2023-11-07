import Link from 'next/link'
import styles from '../login.module.css'
import { login } from '@/app/actions';
import path from 'path';

export default function Login() {

  const signin = async (formData: FormData) => {
    'use server'
    const res = 
    // fetch((path.join(__dirname, '../api/auth/login')))
    await fetch('/api/auth/login', {
      method: 'POST',
      //@ts-ignore
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    console.log(res)
  }

  return (<>
    <h1>Log In</h1>
    <div className={styles.credentials}>

      <form action={signin} className={styles.credentials}>
      <label htmlFor="username">Username:
          <input type="text" required
          name="username" id="username"/> 
        </label>
        <label htmlFor="password">Password:
          <input type="password" required
          name="password" id="password"/>
        </label>
        <button type='submit'>Sign In</button>
      </form>

      <p> Don't have an account?
        <Link href='/signup'>Sign Up!</Link>
      </p>

    </div>
    </>
  )
}