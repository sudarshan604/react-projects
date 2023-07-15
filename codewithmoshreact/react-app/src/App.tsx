import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import ListGroup from './components/ListGroup'
import Alert from './components/Alert'
import Form from './components/Form'
import {CanceledError} from './services/api-client'
import userService,{User} from './services/user-service'
import useUsers from './hooks/useUsers'


function App() {
const {users,error,setUser,seterror}=useUsers()


const handleDelete=(user:User)=>{
    const originaluser=[...users]
    setUser(users.filter(u=>u.id!==user.id))

 userService.deleteUser(user.id)
 .catch(err=>{
  seterror(err.message)
  setUser(originaluser)
 })

}
const addUser=()=>{
   const originalUser=[...users] 
  const newUser={id:0,name:'me'}
    setUser([newUser,...users])
    userService.createUser(newUser)
     .then(({data:saveUser})=>setUser([saveUser,...users]))
     .catch(err=>{
       seterror(err.message)
       setUser(originalUser)
     })
    }

    const updateuser = (user: User) => {
      const updatedUser = { ...user, name: user.name + '!' };
     const originalUser=[...users]
      setUser(users.map(u => u.id === user.id ? updatedUser : u));

    userService.updateUser(updatedUser)  
   .catch(err=>{
    seterror(err)
     setUser(originalUser)
   })
  }
    

 return (<div>
       
       <ul>
        {<button className='btn btn-primary' onClick={addUser}>add user</button>}
        {users.map(us=>{
          return( <>
            <button className="btn btn-outline-secondary" onClick={()=>updateuser(us)}>Update</button>
           <button onClick={()=>handleDelete(us)}><li key={us.id}>{us.name}</li></button> 
          </>
          )
        })}
       </ul>

    </div>
  )
}

export default App
