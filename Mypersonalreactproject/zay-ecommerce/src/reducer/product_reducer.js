import { PRODUCT_BEGIN, PRODUCT_SUCCESS } from "../action/action"


const reducer=(state,action)=>{

if(action.type===PRODUCT_BEGIN)
{
   return {...state,isLoading:true}
}
if(action.type===PRODUCT_SUCCESS)
{
  const category_data=action.payload.filter(item=>{
         if(item.price>1000)
     {
            return item
     }

  })
  const feature_product=action.payload.filter(item=>{
    if(item.featured==true)
{
       return item
}

})


  return {...state,products:action.payload,category_product:category_data,feature_product}
}


  return {...state}

}

export default reducer