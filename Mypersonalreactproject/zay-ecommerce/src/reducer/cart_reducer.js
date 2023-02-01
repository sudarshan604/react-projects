
import { CART_BEGIN, REMOVE_CART_ITEM,CLEAR_CART, CART_ITEM_COUNT } from "../action/action"

const reducer=(state,action)=>{


  if(action.type===CART_BEGIN)
   {
      const {id,color,quantity,product}=action.payload
      const availableCart=state.cart.find(it=>it.id===id+color)

      console.log(product)
      if(availableCart)
      {
            const tempCart=state.cart.map(item=>{
              if(item.id===id+color)
              {
                  let newQuantity=item.quantity+quantity
                  if(newQuantity>item.max)
                  {
                    newQuantity=item.max
                  }
               return {...item,quantity:newQuantity}
              }else{
               return item
              }

            })
         return{...state,cart:tempCart}
         }
      else{
    const newItem={
             id:id+color,
             quantity,
             name:product.name,
             color,
             image:product.images[0].url,
             price:product.price,
            max:product.stock,
        
           }
           return {...state,cart:[...state.cart,newItem]}
      }
   
      

   }
   if(action.type===REMOVE_CART_ITEM)
   {
         const id=action.payload

         const tempCart=state.cart.filter(i=>i.id!==id)

   return {...state,cart:tempCart}
   }
   if(action.type===CLEAR_CART)
   {
        return{...state,cart:[]}
   }
if(action.type===CART_ITEM_COUNT)
{
   const {total_items,total_price}=state.cart.reduce(((acc,item)=>{
        
      const {quantity,price}=item
      acc.total_items+=quantity
      acc.total_price+=price*quantity
  return acc
   }),
   {
  total_items:0,
  total_price:0
   })
return{...state,total_items,total_price}
}

   return {...state}

   throw new Error(`No Matching "${action.type}" - action type`)
}


export default reducer