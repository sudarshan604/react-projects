import apiClient from "./api-client";
import create from "./http-service";






export interface User{
    id:number,
    name:string  
   }

export default create('/users')

// class UserService{
//     getALlUsers(){
//      const controller=new AbortController()//cancelling  fech request
//   const request=  apiClient
//     .get<User[]>('/users',{signal:controller.signal})
//  return {request,cancel:()=>controller.abort()} 

// }
//   deleteUser(id:number){
//    return apiClient
//     .delete<User[]>('/users'+id)
 

// }
// createUser(user:User){
//  return   apiClient.post('/users/',user)

// }
// updateUser(user:User){
//    return apiClient.patch('/users/'+user.id,user)
// }



// }

// export default new UserService