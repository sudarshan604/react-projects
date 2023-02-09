import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../cartItems";



const initialState={
     cart:cartItems,
     amount:3,
     total:0,
     isLoading:false
}


export const getItems=createAsyncThunk('cart/items',()=>{

  return fetch("https://course-api.com/react-useReducer-cart-project")
  .then(res=>res.json())
  .catch(err=>console.log(err))
})


const cartSlice=createSlice(
    {
     name:"cart",
     initialState,
     reducers:{
         clearCart:(state)=>{
            state.cart=[];
         },
         removeItems:(state,action)=>{
           const itemId=action.payload
           state.cart=state.cart.filter((item)=>item.id!=itemId)
         },
       increase:(state,{payload})=>{
            const cartItem=state.cart.find(item=>item.id===payload.id)
            cartItem.amount=cartItem.amount + 1;
        },
       decrease:(state,{payload})=>{
            const cartItem=state.cart.find(item=>item.id===payload.id)
            cartItem.amount=cartItem.amount - 1;
        },
      calculateTotals:(state)=>{
           let amount=0
           let total=0
          state.cart.forEach(item=>{
             amount+=item.amount
             total+=item.amount*item.price
          })
      state.amount=amount
      state.total=total

      }  
             },
  
  extraReducers:{
    [getItems.pending]:(state)=>{
       state.isLoading=true
    },
    [getItems.fulfilled]:(state,action)=>{
     state.isLoading=false
     state.cart=action.payload

    },
    [getItems.rejected]:(state,action)=>{
      state.isLoading=false
      state.cart=action.payload
        }
  }
    
            }
)

export const {clearCart,removeItems,increase,decrease,calculateTotals} =cartSlice.actions; 


export default cartSlice.reducer