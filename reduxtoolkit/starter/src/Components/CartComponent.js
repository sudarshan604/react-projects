import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from './cartItem'
import {clearCart} from '../features/cartSlice'
import {openModal} from '../features/modalSlice'

function CartComponent() {
   const {cart,amount,total,}=useSelector(state=>state.cart)
   
   const dispatch=useDispatch()


 if(amount<1)
 {
    return (
        <section>
              <header>
                 <h2>your bag</h2>
              <h4 className='empty-cart'>is currently empty</h4>
              </header>
        </section>
    )
 }

    return (
    <section className='cart'>
           <header>
              <h2>your bag</h2>
           </header>
           <div>
             {cart.map((item)=>{
    return <CartItem key={item.id} {...item}/>
            })}
            </div> 
         <footer>
             <hr />
              <div className='card-total'>
                    <h4>total <soan>${total}</soan></h4>
              </div>
               <button className='btn clear-btn' onClick={()=>dispatch(openModal())} >clear cart</button>
         </footer>
    </section>
  )
}

export default CartComponent