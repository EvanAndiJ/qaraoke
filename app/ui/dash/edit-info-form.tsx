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

export default function EditInfoForm() {
  const initialState = { message: null, errors: {} };
//   const [state, dispatch] = useFormState(createRoom, initialState);
  
  return (
    <form >
    {/* <form action={dispatch}> */}
      <div>
        
        <label htmlFor='name'>Name:
          <input
            id='name'
            name='name'
            type='string'
            placeholder='Name'
            className=''
          />
        </label>
        <label htmlFor='username'>Username:
          <input
            id='username'
            name='username'
            type='string'
            placeholder='Username'
            className=''
          />
        </label>
        <label htmlFor='email'>Email:
          <input
            id='email'
            name='email'
            type='string'
            placeholder='Email'
            className=''
          />
        </label>
        <label htmlFor='bio'>Bio:
          <input
            id='bio'
            name='bio'
            type='string'
            placeholder='Bio'
            className=''
          />
        </label>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button type="submit">Create Invoice</button>
      </div>
    </form>
  );
}
