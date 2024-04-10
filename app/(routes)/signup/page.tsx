  import style from '../../styles/auth.module.css'
  import SignUpForm from '../../ui/auth/signup.form';
  import Link from 'next/link';

  export default function SignupPage() {
 
    return (
      <>
      <h1>Sign  Up</h1>
      <div className={style.credentials}>
        <SignUpForm/>

        <p> Already have an account?
          <Link href={'/login'}>Sign In!</Link>
        </p>
      </div>
      </>
    );
  }