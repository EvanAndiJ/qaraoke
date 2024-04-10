import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Manage Room',
};

import { Suspense } from 'react';

import MyRooms from '../../../../../ui/dash/my-rooms';

export default function RoomsPage({searchParams
}: {
  searchParams: { [key: string]: string | string[] }
})  {
    return (<>
        <h1>My Rooms</h1>
        
        {/* <Suspense fallback={<div>roomslist skelly</div>}>
          <MyRooms userId={searchParams.id}/>
        </Suspense> */}

    </>
    )
}