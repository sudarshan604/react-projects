import React, { useContext } from 'react'
import { useState } from 'react'
import { useReducer } from 'react'
import reducer from '../reducer/cart_reducer'
import data from '../utils/HeroData'
import { CART_BEGIN } from '../action/action'
const CartContext=React.createContext()


const initialState={
  cart:[],
}








function CartProvider({children}) {

  
const [state,dispatch]=useReducer(reducer,initialState)

const [color,setColor]=useState()





const addColor=(color)=>{
 setColor(color)
}


const addToCart=(id,quantity,product)=>{

  dispatch({type:CART_BEGIN,payload:{id,quantity,product,color}})
}

  return (<CartContext.Provider value={{...state,addToCart,addColor}}>
     {children}
</CartContext.Provider>
  )
}

export const useGlobalCartContext=()=>{
   return useContext(CartContext)
}


export default CartProvider