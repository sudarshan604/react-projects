import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";



const initialState={
     cart:cartItems,
     amount:3,
     total:0,
     isLoading:false
}


const cartSlice=createSlice(
    {
     name:"cart",
     initialState,
     reducers:{
         clearCart:(state)=>{
            state.cart=[];
         }
     }
  
    }
)

export const {clearCart} =cartSlice.actions; 


export default cartSlice.reducer