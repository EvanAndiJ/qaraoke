'use client';

// import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
// import { Button } from '@/app/ui/button';
import { createRoom } from '../../lib/actions';
import { useFormState } from 'react-dom';

export default function CreateForm() {
  const initialState = { message: null, errors: {} };
//   const [state, dispatch] = useFormState(createRoom, initialState);
  
  return (
    <form >
    {/* <form action={dispatch}> */}
      <div>
        
        <label htmlFor='room-name'>Name:
          <input
            id='room-name'
            name='room-name'
            type='string'
            placeholder='Room Name'
            className=''
          />
        </label>
        <label htmlFor='room-loc'>Location:
          <input
            id='room-loc'
            name='room-loc'
            type='string'
            placeholder='Location'
            className=''
          />
        </label>
        <label htmlFor='room-date'>Date:
          <input
            id='room-date'
            name='room-date'
            type='string'
            placeholder='When is your karaoke night?'
            className=''
          />
        </label>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dash/rooms"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button type="submit">Create Room</button>
      </div>
    </form>
  );
}
