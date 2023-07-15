import apiClient from "./api-client";

interface Entity{
 id:number    
}

class HttpService{
   endpoint:string
    constructor(endpoint:string){
         this.endpoint=endpoint
    }

    getAll<T>(){
     const controller=new AbortController()//cancelling  fech request
  const request=  apiClient
    .get<T>(this.endpoint,{signal:controller.signal})
 return {request,cancel:()=>controller.abort()} 

}
  deleteUser(id:number){
   return apiClient
    .delete(this.endpoint + "/" +id)
 

}
createUser<T>(entity:T){
 return   apiClient.post(this.endpoint,entity)

}
updateUser<T extends Entity>(entity:T){
   return apiClient.patch(this.endpoint +"/"+entity.id,entity)
}



}

const create=(endpoint:string)=>new HttpService(endpoint)

export default create
