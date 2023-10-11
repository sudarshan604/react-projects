import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link'


const UserPage =async () => {



  return (
     <>
      <h1>Users</h1>
      <Link href="/users/new" className='btn btn-primary'>new user</Link>
      <UserTable/>     
      </>
    )
}

export default UserPage