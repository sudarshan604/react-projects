import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import reducer from '../reducer/cart_reducer'
import data from '../utils/HeroData'
import { CART_BEGIN,REMOVE_CART_ITEM,CLEAR_CART,CART_ITEM_COUNT } from '../action/action'
const CartContext=React.createContext()


const getLocalData=()=>{
  const item=localStorage.getItem("cart")
  if(item){
    return JSON.parse(localStorage.getItem('cart'))
   }
 else {
   return []

 }

  }

const initialState={
  cart:getLocalData(),
   total_items:0,
   total_price:0
}








function CartProvider({children}) {

  
const [state,dispatch]=useReducer(reducer,initialState)

const [color,setColor]=useState()


useEffect(()=>{
  dispatch({type:CART_ITEM_COUNT})
  localStorage.setItem('cart',JSON.stringify(state.cart))

},[state.cart])


const addColor=(color)=>{
 setColor(color)
}


const addToCart=(id,quantity,product)=>{

  dispatch({type:CART_BEGIN,payload:{id,quantity,product,color}})
}


const removeItem=(id)=>{
 dispatch({type:REMOVE_CART_ITEM,payload:id})
}

const clearCart=()=>{

  dispatch({type:CLEAR_CART})
  }

  return (<CartContext.Provider value={{...state,addToCart,addColor,removeItem,clearCart}}>
     {children}
</CartContext.Provider>
  )
}

export const useGlobalCartContext=()=>{
   return useContext(CartContext)
}


export default CartProvider