import Link from 'next/link'

export default function Login() {

  return (
  <main>
    <h1>Log In</h1>
    <div>
      <form action="">
        
        <label htmlFor="username">Username:
              <input type="text" name="username" id="username" /></label>
        <label htmlFor="password">Password:
              <input type="password" name="password" id="password" /></label>
      </form>

    </div>
    <p> Don't have an account?
      <Link href='/signup'>Sign Up!</Link>
    </p>
  </main>);
}