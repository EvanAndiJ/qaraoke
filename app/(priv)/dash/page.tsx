import { Suspense } from 'react';
import { Metadata } from 'next';
import SideBar from '../../ui/SideBar';
import RoomsList from '../../ui/dash/my-rooms';
import PersonalInfo from '../../ui/dash/personal-info';
import Link from 'next/link';

 
export const metadata: Metadata = {
  title: 'Dashboard',
};
 
export default async function Dashboard({searchParams
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    
  // console.log(searchParams)
  return (
    <>
      {/* <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}> */}
      <h1 className={`mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div id='dash-organizer' style={{display:'flex'}}>
        <div id='sidebar-container'>
          <SideBar/>
        </div>
        <div id='dash-main'>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {searchParams.id ?
              <Suspense fallback={<h2>Personal Info Skelly</h2>}>
                <PersonalInfo userId={searchParams.id}/>
              </Suspense>
            : <p>no user?</p>
            }
          </div>
          <hr/>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            My Rooms
            {searchParams.id ?
              <Suspense fallback={<div>roomslist skelly</div>}>
                <RoomsList userId={searchParams.id}/>
              </Suspense>
            : <p>no rooms</p>
            }
            <button>
              <Link href="./dash/rooms/create">Create Room</Link>
            </button>
          </div>
          <hr/>
        </div>
      </div>
    </>
  );
}