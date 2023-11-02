import { useFormStatus } from 'react-dom';
import Link from 'next/link'
import styles from '../login.module.css'
import { login } from '@/app/actions';

export default function Login() {
  //@ts-ignore
  // const [state, formAction] = useFormState(login)
  // const {pending} = useFormStatus()
  // const handleLogin = ()

  return (
  <main>
    <h1>Log In</h1>
    <div className={styles.credentials}>
      {/* <p>{pending ? 'a' : 'b' }</p> */}
      <form action={login} className={styles.credentials}>
        <label htmlFor="username">Username:
              <input type="text" name="username" id="username" required/></label>
        <label htmlFor="password">Password:
              <input type="password" name="password" id="password" required/></label>
        <button type='submit'>Sign In</button>
      </form>
    <p> Don't have an account?
      <Link href='/signup'>Sign Up!</Link>
    </p>
    </div>
  </main>);
}