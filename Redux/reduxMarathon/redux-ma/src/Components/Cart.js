import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cart=useSelector(state=>state.cart)


  return (
    <div>
  <h2>cart component</h2>
     <ul>
   {cart.map(item=>{
         return <li>{item.pname}</li> 
    })}   
    </ul>
 
    </div>
  )
}

export default Cart