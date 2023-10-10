import React from 'react'

interface User{
    id:number;
    name:string;
    email:string;
} 
const UserTable =async () => {
    const rest = await fetch('https://jsonplaceholder.typicode.com/users')

const users:User[]= await rest.json()
  return (
    <table className='table table-bordered'>
    <thead>
        <tr>
           <th>name</th>
           <th>Email</th>
        </tr>
    </thead>
    <tbody>

{users.map(user=><tr key={user.id}>
<td className=''>{user.name}</td>      <td className=''>{user.email}</td>

</tr>)}
    </tbody>
</table>
  )
}

export default UserTable