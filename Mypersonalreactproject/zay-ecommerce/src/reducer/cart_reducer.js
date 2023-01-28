
import { CART_BEGIN } from "../action/action"

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
return {...state}

   throw new Error(`No Matching "${action.type}" - action type`)
}


export default reducer