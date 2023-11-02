  import style from '../login.module.css'
  import { useFormState, useFormStatus } from 'react-dom'
  import { signUp } from '@/app/actions'
  const initialState = {
    message:null,
  }

  export default function Signup() {
    // const {pending} = useFormStatus()
    // //@ts-ignore
    // const [state, formAction] = useFormState(signUp)

    return (
    <main>
      <h1>Sign  Up</h1>
      <form className={`${style.credentials} ${style.signupCreds}`} action={signUp}>
        <label htmlFor="username">Username:
          <input type="text" name="username" id="username" required/></label>
        <label htmlFor="name">Name:
          <input type="text" name="name" id="name" required/></label>
        <label htmlFor="email">Email:
          <input type="email" name="email" id="email" required/></label>
        <label htmlFor="password">Password:
          <input type="password" name="password" id="password" required/></label>
        <button type='submit'>Sign Up</button>
      </form>
      
    </main>);
  }