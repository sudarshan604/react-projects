import { ALL_PRODUCT_BEGIN } from "../action/action"

const reducer=(state,action)=>{
 
  if(action.type===ALL_PRODUCT_BEGIN)
  {
     return {...state,All_Products:action.payload}
  }



  return {...state}

}

export default reducer