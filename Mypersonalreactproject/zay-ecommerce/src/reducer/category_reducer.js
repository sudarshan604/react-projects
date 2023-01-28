import { ALL_PRODUCT_BEGIN,UPDATE_SORT,SORT_PRODUCT,UPDATE_CATEGORY, SORT_CATEGORY, CLEAR_FILTER } from "../action/action"

const reducer=(state,action)=>{
 
  if(action.type===ALL_PRODUCT_BEGIN)
  {
    let maxprice=action.payload.map(p=>p.price)

     maxprice=Math.max(...maxprice)
   
    return {...state,All_Products:action.payload,filter_Products:action.payload, filters:{
      ...state.filters,
      max_price:maxprice,
      price:maxprice,
      min_price:0       
    }}
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
   
   const name=action.payload.name
   const value=action.payload.value
   
    return {...state,filters:{
      ...state.filters,
         [name]:value  
    }}
  
  }




if(action.type===SORT_CATEGORY)
{
 const {All_Products} =state
const {text,category,company,color,price,max_price,min_price,shipping,}=state.filters

let tempProducts=All_Products

if(category!=="all"){

  tempProducts=tempProducts.filter(item=>item.category===category) 
}
if(company!=="all"){

  tempProducts=tempProducts.filter(item=>item.company===company) 
  
}


if(color!=='all')
{
  tempProducts=tempProducts.filter(product=>{
   return product.colors.find((c)=>c==color)
  }) 
}

tempProducts=tempProducts.filter(product=>product.price<=price)


if(shipping)
{
  tempProducts=tempProducts.filter(product=>product.shipping===true)   
}




return{...state,filter_Products:tempProducts}
}





if(action.type===CLEAR_FILTER){
 
  return{
    ...state,
    filters:{
     ...state.filters,
     text:'',
     company:'all',
     category:"all",
     color:"all",
     price:state.filters.max_price,
     shipping:false}
  }
}

  return {...state}

}

export default reducer