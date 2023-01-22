import { ALL_PRODUCT_BEGIN } from "../action/action"

const reducer=(state,action)=>{
 
  if(action.type===ALL_PRODUCT_BEGIN)
  {
    const ca=action.payload.map(item=>item.category)
 const uniqueCategory=["All",...new Set(ca)]
   
    return {...state,All_Products:action.payload,category:uniqueCategory}
  }



  return {...state}

}

export default reducer