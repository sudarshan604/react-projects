'use client'
import React from 'react'

import { useRouter } from 'next/navigation'
const NewPage = () => {
 const router=useRouter()
  return (
    <button className='btn btn-primary'
    onClick={()=>router.push('/users')}
    
    >create</button>
  )
}

export default NewPage