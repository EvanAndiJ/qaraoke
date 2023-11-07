  import style from '../login.module.css'
  import { signUp } from '@/app/actions'

  export default function Signup() {
    // const {pending} = useFormStatus()
    // //@ts-ignore
    // const [state, formAction] = useFormState(signUp)
    const handleSignUp = (formData: FormData) => {
      const res = signUp(formData)
      
    }

    return (
    <main>
      <h1>Sign  Up</h1>
      <form className={`${style.credentials} ${style.signupCreds}`} action={handleSignUp}>
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