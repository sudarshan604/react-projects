import { ALL_PRODUCT_BEGIN,UPDATE_SORT,SORT_PRODUCT } from "../action/action"

const reducer=(state,action)=>{
 
  if(action.type===ALL_PRODUCT_BEGIN)
  {
    const ca=action.payload.map(item=>item.category)
    const uniqueCategory=["All",...new Set(ca)]
   
    return {...state,All_Products:action.payload,category:uniqueCategory,filter_Products:action.payload}
  }

if(action.type===UPDATE_SORT)
{
  console.log(action.payload)
   return {...state,sort:action.payload}
}

if(action.type===SORT_PRODUCT)
{
 const {sort,filter_Products}=state
  let temp_products=filter_Products
  console.log("SORT,",sort,filter_Products)
  if(sort==="price-lowest")
   {
    temp_products=filter_Products.sort((a,b)=>{
      return a.price-b.price


   })
  }
  if(sort=="price-highest")
  {
    temp_products=filter_Products.sort((a,b)=>{
      return b.price-a.price
    })
  }


  if(sort=="name-a")
   {
         temp_products=filter_Products.sort((a,b)=>{
           return a.name.localeCompare(b.name)
         })
  }
  if(sort=="name-z")
  {
    temp_products=filter_Products.sort((a,b)=>{
      return b.name.localeCompare(a.name)
    })
  }










    return {...state,filter_Products:temp_products}
  
  }







  return {...state}

}

export default reducer