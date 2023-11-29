import Link from 'next/link'
import styles from '../../../styles/auth.module.css'
import { redirect } from 'next/navigation';
import LoginForm from '../../../components/login.form';


export default function Login() {

  return (<>
    <h1>Log In</h1>
    <div className={styles.credentials}>

      <LoginForm/>

      <p> Don't have an account?
        <Link href={'/signup'}>Sign Up!</Link>
      </p>

    </div>
    </>
  )
}