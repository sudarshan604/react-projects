import React from 'react'
import { CartColumns,CartItem} from '../components'
import styled from 'styled-components'
import { useGlobalCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
function CartContent() {
  const {cart,clearCart}=useGlobalCartContext()

  return (
    <Wrapper>
    <div> 
         <CartColumns/>
            {
              cart.map(item=>{
                return <CartItem key={item.id} {...item}/>
              })
            }
    <div className='link-div'>
      <Link className='link s-link' to="/products">Continue shopping</Link>
     <button className='link c-link' onClick={clearCart}>Clear cart</button>
    </div>
    </div>
    <div>
       
    </div>

    </Wrapper>
  )
}

export default CartContent

const Wrapper=styled.div`
.link-div{
  display:flex;
  width:90%;
  margin:0 auto;
}
.link{
  text-decoration:none;
  font-size:1.5rem;
  padding:.4rem 1rem;
  border-radius:3px;
  color:#fff;
  display:inline-block;
}
.s-link{
background-color:blue;
}
.c-link{
margin-left:auto;
 background-color:red;
 border:none;
}


`