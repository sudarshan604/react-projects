import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'>
         <Link href={'/'} className='mr-5'>Next.js</Link>
    </div>
  )
}

export default Navbar