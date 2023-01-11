import { PRODUCT_BEGIN, PRODUCT_SUCCESS } from "../action/action"


const reducer=(state,action)=>{

if(action.type===PRODUCT_BEGIN)
{
   return {...state,isLoading:true}
}
if(action.type===PRODUCT_SUCCESS)
{
  const category_data=action.payload.filter(item=>{
         if(item.rating.rate>4)
     {
            return item
     }

  })

 
  return {...state,products:action.payload,category_product:category_data}
}


  return {...state}

}

export default reducer