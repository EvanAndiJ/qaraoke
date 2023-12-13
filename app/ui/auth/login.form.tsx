'use client'
import styles from '../../styles/auth.module.css'

import { authenticate } from '../../lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
  
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