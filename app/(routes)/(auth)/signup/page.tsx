  import style from '../../../styles/auth.module.css'
  import SignUpForm from '../../../components/signup.form';

  export default function SignupPage() {
 
    return (
      <>
      <h1>Sign  Up</h1>
      <div className={style.credentials}>
        <SignUpForm/>
      </div>
      </>
    );
  }