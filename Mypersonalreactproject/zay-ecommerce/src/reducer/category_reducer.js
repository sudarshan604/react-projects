import { ALL_PRODUCT_BEGIN,UPDATE_SORT,SORT_PRODUCT,UPDATE_CATEGORY, SORT_CATEGORY } from "../action/action"

const reducer=(state,action)=>{
 
  if(action.type===ALL_PRODUCT_BEGIN)
  {
    const ca=action.payload.map(item=>item.category)
    const uniqueCategory=["All",...new Set(ca)]
   
    return {...state,All_Products:action.payload,category:uniqueCategory,filter_Products:action.payload}
  }

if(action.type===UPDATE_SORT)
{
  return {...state,sort:action.payload}
}



if(action.type===SORT_PRODUCT)
{
 const {sort,filter_Products}=state
console.log(filter_Products)

 let temp_products=filter_Products
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



  if(action.type===UPDATE_CATEGORY)
  {
    return {...state,sort_category:action.payload}
  }


if(action.type===SORT_CATEGORY)
{
  let {sort_category,filter_Products,All_Products}=state
   filter_Products=All_Products
 if(sort_category==="All")
 {
  return {...state,filter_Products}

 }
  

  let temp_products=filter_Products.filter(item=>{
    if(item.category===sort_category)
    {
       return item
    }
  
  })

  return {...state,filter_Products:temp_products}


}


  return {...state}

}

export default reducer