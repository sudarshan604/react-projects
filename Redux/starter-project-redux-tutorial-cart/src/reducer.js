
import { INCREASE,DECREASE, REMOVE,GET_TOTAL } from "./Action";
import {CLEAR_CART} from './Action'

function reducer(state,action)
  {
    
 console.log(state.cart)
      if(action.type==CLEAR_CART)
             {
               return{...state,cart:[]}
             }


     if(action.type==INCREASE)
     {
        let tempCart=state.cart.map((cartItem)=>{
             if(cartItem.id===action.payload.id)
             {
                return {...cartItem,amount:cartItem.amount+1}
             }
           
            return cartItem;
        })
           return {...state,cart:tempCart}

    }
     if(action.type==DECREASE)
     {
         let tempCart=[]
          if(action.payload.amount===1)
          {
        tempCart=state.cart.filter(item=>item.id!==action.payload.id)
    

          }
       else{
         tempCart=state.cart.map((cartItem)=>{
            if(cartItem.id===action.payload.id)
            {
               return {...cartItem,amount:cartItem.amount-1}
            }
          
           return cartItem;
       })
         }
    return {...state,cart:tempCart}
     
        }
     
  


            
     if(action.type==REMOVE)
        {
    const {cart}=state
  return {...state,cart:cart.filter(item=>item.id!==action.payload.id)}
}     


if(action.type==GET_TOTAL)
{

 let {total,amount}=state
 
}
return state
      
        }
        
     export default reducer
        
       
       
        // switch(action.type)
        // {
        //    case CLEAR_CART:
        //         return{...state,cart:[]}
       
        //         default:
        //             return state
        // }