import getServerSession  from 'next-auth';
import { NextResponse } from 'next/server';

import { authConfig } from "../../../../auth.config"
import { handlers } from "../../../../auth"
// export const { POST } = handlers
export const { GET, POST } = handlers


// export async function GET(request: Request) {
//     // const session = await getServerSession(authConfig);
//     const session = getServerSession(authConfig);
//     // console.log('GET', session.auth);
//     return NextResponse.json({
//       id: 1,
//     });
//   }