import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {

  return (
    <main className={styles.main}>
      

      <div className={styles.center}>
        <div className={styles.logo}>
          <h1>Qaraoke</h1>
          <h6>The easy way to sing</h6>
        </div>
        <div className={styles.inputArea}>
          <input type="text" placeholder="Find a Room"/>
          <div>
            <Link href='./r'>Browse Rooms</Link>
            <Link href='./login'>Log In</Link>
          </div>
        </div>
      </div>

    </main>
  )
}
