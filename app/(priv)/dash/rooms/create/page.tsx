import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Create Room',
};

import { Suspense } from 'react';
import CreateForm from '../../../../ui/dash/create-room-form';


// import MyRooms from '../../../../ui/dash/my-rooms';

export default function RoomsPage({searchParams
}: {
  searchParams: { [key: string]: string | string[] }
})  {
    return (<>
        <h1>Create a Room</h1>
        
        <CreateForm />

    </>
    )
}