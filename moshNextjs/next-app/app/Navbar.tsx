'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
   const {status,data:session}  =  useSession()
  
   console.log(session)

   return (
    <div className='flex'>
         <Link href={'/'} className='mr-5'>Next.js</Link>
        {status==='unauthenticated' && <Link href={'api/auth/signin'} className='mr-5'>sigin</Link>}
        {status==='authenticated' && <div  className='mr-5'>{session.user!.name}
        <Link href={'/api/auth/signout'} className='mr-5'>signout</Link>
        </div>}
    </div>
  )
}

export default Navbar