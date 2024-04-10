// 'use client'
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation';
import { Suspense } from "react";
import Link from 'next/link'

import UserSummary from "@/app/ui/user-profile/user-summary.profile";

// export function generateStaticParams() {
//     return [{ user: 'evan' }, { user: 'pat' }, { user: 'bird' }]
// }

export default function UserProfilePage({ params }: { params: { user: string } }) {
    // const { data } = useSession()
    const { user } = params
    
    return (<>
        <Suspense fallback={<div>user summary</div>}>
            <UserSummary user={user}/>
        </Suspense>
        {/* <button onClick={()=>console.log(data)}>sesssio</button> */}

        </>
    )
}