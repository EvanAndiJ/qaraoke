'use client'

import Link from "next/link";
import { fetchUserById } from "../../lib/data"
import { useState } from "react";
import EditInfoForm from "./edit-info-form";

export default async function PersonalInfo({userId} :  {userId: string | string[]}) {
    // const [isEdit, setIsEdit] = useState(false)
    const userInfo = await fetchUserById(typeof userId === 'string' ? userId : userId[0])
    // console.log('userInfo', userInfo)
    return (
        <div>
            <Link href={`/u/${userInfo.username}`}>My Profile</Link>
            <h2>Personal Info</h2>
            {/* <button onClick={()=>setIsEdit(!isEdit)}``>edit</button> */}
            <p>Name: {userInfo.name}</p>
            <p>Username: {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
            <p>Bio: {userInfo.bio ? userInfo.bio : ''}</p>
            
        </div>
    
    )
  }   
    // {!isEdit ? <>
    //     <p>Name: {userInfo.name}</p>
    //     <p>Username: {userInfo.username}</p>
    //     <p>Email: {userInfo.email}</p>
    //     <p>Bio: {userInfo.bio ? userInfo.bio : ''}</p>
    // </>
    // : <form >
    //   <div>
        
    //     <label htmlFor='name'>Name:
    //       <input
    //         id='name'
    //         name='name'
    //         type='string'
    //         placeholder='Name'
    //         className=''
    //       />
    //     </label>
    //     <label htmlFor='username'>Username:
    //       <input
    //         id='username'
    //         name='username'
    //         type='string'
    //         placeholder='Username'
    //         className=''
    //       />
    //     </label>
    //     <label htmlFor='email'>Email:
    //       <input
    //         id='email'
    //         name='email'
    //         type='string'
    //         placeholder='Email'
    //         className=''
    //       />
    //     </label>
    //     <label htmlFor='bio'>Bio:
    //       <input
    //         id='bio'
    //         name='bio'
    //         type='string'
    //         placeholder='Bio'
    //         className=''
    //       />
    //     </label>
    //   </div>

    //   <div className="mt-6 flex justify-end gap-4">
    //     <button type="submit">Create Invoice</button>
    //   </div>
    // </form>
    // }