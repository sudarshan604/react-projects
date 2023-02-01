import React from 'react'
import { CartColumns,CartItem} from '../components'
import styled from 'styled-components'
import { useGlobalCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
function CartContent() {
  const {loginWithRedirect,user}=useAuth0()
  const {cart,clearCart,total_price,total_items}=useGlobalCartContext()

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
    <div className='whole'>
        <div className='total'>
            <h3>Sub total:    {total_price}</h3>
            <h3 className='shipping-fee'>Shipping fee: NPR 40</h3>
            <h3>Order Total: {total_price + 40} </h3>
      </div>
    { user?<Link to='/checkout'  className='btn'>Processed to checkout</Link> :
     <button onClick={loginWithRedirect} className='btn'>login</button>
}
    </div>

    </Wrapper>
  )
}

export default CartContent

const Wrapper=styled.div`
.btn{
  width:100%;
 padding:.4rem .4rem;
 background-color:#ab7a5b;
 color:#fff;
 font-size:1.6rem; 
border:none;
text-decoration:none;
display:inline-block;
text-align:center;
cursor: pointer;
 border-radius:4px;
 transition:all .3s; 
 :hover{
   opacity:.7;
 }
}
.whole{
  width:50rem;
  margin-left:auto;
 margin-bottom:4rem;
}

.shipping-fee{
  width:90%;
  border-bottom:1px solid #888;
  padding-bottom:3rem;
 margin-top:3rem;
 margin-bottom:2rem;
}

.total{
  border:1px solid #888;
  margin-top:4rem;
   font-size:2.8rem;
  padding:3rem 6rem; 
 margin-bottom:3rem;
  div{
  font-size:2.2rem;

 h3{
 margin-bottom:3rem; 
}
}
}
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
background-color:#ab7a5b;
}
.c-link{
margin-left:auto;
 background-color:red;
 border:none;
}


`