import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  

 if(action.type===LOAD_PRODUCTS){
 
  let maxprice=action.payload.map(p=>p.price)

  maxprice=Math.max(...maxprice)
  return {...state,all_products:[...action.payload],filter_products:[...action.payload],
    filters:{
      ...state.filters,
      max_price:maxprice,
      price:maxprice       
    }
  }
 }
if(action.type==SET_GRIDVIEW)
{
   return {...state,grid_view:true}
}

if(action.type==SET_LISTVIEW)
{
   return {...state,grid_view:false}
}

if(action.type==UPDATE_SORT)
{
 return {...state,sort:action.payload}
}

if(action.type==SORT_PRODUCTS)
{
    const {filter_products,sort}=state
    let temp_products=filter_products

  if(sort=="price-lowest")
  {
   temp_products=filter_products.sort((a,b)=>{
     return a.price-b.price
   })

  }
  
  if(sort=="price-highest")
  {
    temp_products=filter_products.sort((a,b)=>{
      return b.price-a.price
    })
  }
  if(sort=="name-a")
   {
         temp_products=filter_products.sort((a,b)=>{
           return a.name.localeCompare(b.name)
         })
  }
  if(sort=="name-z")
  {
    temp_products=filter_products.sort((a,b)=>{
      return b.name.localeCompare(a.name)
    })
  }
       return {...state,filter_products:temp_products}  
}

 if(action.type==UPDATE_FILTERS)
{

  const {name,value}=action.payload

 return {...state,filters:{...state.filters,[name]:value}}
}


if(action.type==FILTER_PRODUCTS)
{
  const {all_products}=state
  const {text,company,category,color,price,shipping} =state.filters
  let tempProducts=[...all_products]
  // text
  if(text){
     tempProducts=tempProducts.filter((product)=>{
       return product.name.toLowerCase().startsWith(text)
     })
  }
// category
 if(category!=='all'){
   tempProducts=tempProducts.filter(product=>{
     return product.category==category
   })
 }
 
// company
if(company!=='all'){
  tempProducts=tempProducts.filter(product=>{
    return product.company==company
  })
}

//Colors

if(color!=='all')
{
  tempProducts=tempProducts.filter(product=>{
   return product.colors.find((c)=>c==color)
  }) 
}

// price
   tempProducts=tempProducts.filter(product=>product.price<=price)



// shippping

if(shipping)
{
  tempProducts=tempProducts.filter(product=>{
   return  product.shipping==true
  })
}









   return {...state,filter_products:tempProducts}


 
}

if(action.type==CLEAR_FILTERS)
{
   return {
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



return state
 
       throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
