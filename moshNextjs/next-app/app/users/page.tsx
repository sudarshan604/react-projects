import React from 'react'

interface User{
    id:number;
    name:string
}

const UserPage =async () => {

const rest = await fetch('https://jsonplaceholder.typicode.com/users')

const users:User[]= await rest.json()

  return (
     <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {users.map(user=><li key={user.id}>{user.name}</li>)}
      </>
    )
}

export default UserPage