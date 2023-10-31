  export default function Signup() {
    return (
    <main>
      <h1>Sign  Up</h1>
      <form>

        <label htmlFor="username">Username:
          <input type="text" name="username" id="username" /></label>
        <label htmlFor="name">Name:
          <input type="text" name="name" id="name" /></label>
        <label htmlFor="email">
          <input type="email" name="email" id="email" /></label>
        <label htmlFor="password">Password:
          <input type="password" name="password" id="password" /></label>
      </form>
      
    </main>);
  }