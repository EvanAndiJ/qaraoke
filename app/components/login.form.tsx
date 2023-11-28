'use client'
import styles from '../styles/auth.module.css'

import { authenticate } from '../lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

// const handleLogin = async (formData: FormData) => {
//     'use server'
//     const res = await login(formData)
//     // const res = await fetch('http://localhost:3000/api/auth/login',{
//     //     method: 'POST',
//     //     headers: {
//     //       'content-type':'application/json',
//     //     },
//     //     body: JSON.stringify({formData})
//     //   })
//     // .then(res => res.json()))
//     console.log(res)
// }

  
export default function LoginForm () {

    const [state, dispatch] = useFormState(authenticate, undefined);    


    return (
        <form action={dispatch} className={styles.credentials}>

            <label htmlFor="username">Email:
                <input type="text" required
                name="email" id="email"/> 
            </label>

            <label htmlFor="password">Password:
                <input type="password" required
                name="password" id="password"/>
            </label>

            <button type='submit'>Sign In</button>

        </form>
    )
}