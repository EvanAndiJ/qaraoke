import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'My Rooms',
};

import { Suspense } from 'react';


import RoomsList from '../../../ui/dash/rooms-list';

export default function RoomsPage() {
    return (<>
        <h1>My Rooms</h1>
        
        <Suspense fallback={<div>roomslist skelly</div>}>
          <RoomsList/>
        </Suspense>

    </>
    )
}