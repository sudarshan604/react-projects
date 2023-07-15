import { useState,useEffect } from "react"
import userService, { User } from "../services/user-service"
import { CanceledError } from "axios"

const useUsers=()=>{
    const [users,setUser]=useState<User[]>([])
    const [error,seterror]=useState()
    
    
    
    useEffect(() => {
     
    const {request,cancel}=userService.getAll<User>()
    
    request.then(res=>{
         setUser(res.data)})
         .catch(err=>{
          if(err  instanceof CanceledError) return
         seterror(err)
         })
       return ()=>cancel() 
         },[])

 return {users,error,setUser,seterror}
}

export default useUsers