'use client'
import { signup } from '../../lib/actions'
import styles from '../../styles/auth.module.css'
import { useFormState, useFormStatus } from 'react-dom';

  
export default function SignupForm () {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(signup, initialState);

    return (
        <form action={dispatch} className={`${styles.credentials} ${styles.signupCreds}`}>
          <label htmlFor="username">Username:
            <input type="text"
            name="username" id="username" required/>
          </label>
          {/* <label htmlFor="name">Name:
            <input type="text"
            name="name" id="name" required/>
          </label> */}
          <label htmlFor="email">Email:
            <input type="email"
             name="email" id="email" required/>
          </label>
          <label htmlFor="password">Password:
            <input type="password"
            name="password" id="password" required/>
          </label>
          <button type='submit'>Sign Up</button>
        </form>
    )
}