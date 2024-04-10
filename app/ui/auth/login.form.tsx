'use client'
import styles from '../../styles/auth.module.css'

import { useFormState, useFormStatus } from 'react-dom';
import { signIn } from "next-auth/react"
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/dist/server/web/spec-extension/revalidate-path';
  
export default function LoginForm () {
    async function authenticate( formData: FormData) {
      const data = {...Object.fromEntries(formData)}
      console.log(data)
        try {
          // await signIn('credentials', {...Object.fromEntries(formData), callbackUrl:'/dash'});
          await signIn('credentials', {...data, callbackUrl:`/u/${data.username}`});
          // await signIn('credentials', {...Object.fromEntries(formData), redirect:false});
        
          
        } catch (error) {
          if ((error as Error).message.includes('CredentialsSignin')) {
            return 'CredentialsSignin';
          }
          throw error;
        }
    }


    return (
        <form action={authenticate} className={styles.credentials}>

            <label htmlFor="username">Username:
                <input type="text" required
                name="username" id="username"/> 
            </label>

            <label htmlFor="password">Password:
                <input type="password" required
                name="password" id="password"/>
            </label>

            <button type='submit'>Log In</button>

        </form>
    )
}