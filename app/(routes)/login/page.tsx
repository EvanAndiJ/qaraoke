
import Link from 'next/link'
import styles from '../../styles/auth.module.css'

import { redirect } from 'next/navigation';

import LoginForm from '../../ui/auth/login.form';


export default function Login() {

  // extracting data from usesession as session

  return (<>
    <h1 className='text-center'>Sign In</h1>
    <div className={styles.credentials}>

      <LoginForm/>

      <p> Don't have an account?
        <Link href={'/signup'}>Sign Up!</Link>
      </p>

    </div>
    </>
  )
}