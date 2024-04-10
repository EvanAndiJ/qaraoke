import styles from '../../styles/sidebar.module.css'
// import { signOut } from '../../auth';
import Link from 'next/link';

export default function SideBar() {
 
    return (
      <>
      <div style={{display:'flex', flexDirection:'column', marginRight:'1em'}}>
        <Link href="/dash/settings">Settings</Link>
        <Link href="/dash/rooms">Rooms</Link>
        {/* <form action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
            
          }}>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}
      </div>
      </>
    );
  }