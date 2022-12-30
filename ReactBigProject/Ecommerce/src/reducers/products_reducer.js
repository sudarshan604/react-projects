import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
    if(action.type==="OPEN_SIDEBAR")
    {
        return  {...state,isSideBarOPen:true}
    }
    if(action.type==="CLOSE_SIDEBAR"){
      return  {...state,isSideBarOPen:false}
     }
if(action.type===GET_PRODUCTS_BEGIN)
{
   return {...state,isLoading:true}
}
if(action.type===GET_PRODUCTS_SUCCESS)
{ 
    const feature_product=action.payload.filter(item=>{
      if(item.featured===true) 
           return item 
          })
   return {...state,feature_Product:feature_product,products:action.payload,isLoading:false}  
     }


if(action.type===GET_PRODUCTS_ERROR)
  {
     return {...state,isLoading:false,
      Error_loading:true,}
  }

if(action.type===GET_SINGLE_PRODUCT_BEGIN)
{
     return {...state,single_product_loading:true,single_product_error:false}
}

if(action.type===GET_SINGLE_PRODUCT_SUCCESS)
{
   return {...state, single_product:action.payload,single_product_loading:false}
}

if(action.type===GET_SINGLE_PRODUCT_ERROR)
{
    return {...state,single_product_error:true,single_product_loading:false}
}



  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
