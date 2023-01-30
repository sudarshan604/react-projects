import React from 'react'
import styled from 'styled-components'
import { useGlobalCartContext } from '../context/cart_context'
import { FaTrash } from 'react-icons/fa'
function CartItem({id,name,image,quantity,color,price}) {
  
 const {removeItem}=useGlobalCartContext()
  return (
    <Wrapper className='cart-grid'>
            <div className='item'>
                 <img src={image} alt={name} />           
                <div>
                <h3>{name}</h3>
                <div className='color flex'>
                    color:<span style={{backgroundColor:color}}></span>
                 </div>
              
              </div>
               
            </div>
           <div>
             <h3>{price}</h3>
          </div>          
         <div>

         </div>
            <div className='quantity'>
               <h3>{quantity*price}</h3>
              <FaTrash className='trash' onClick={()=>removeItem(id)}/>
            </div>
    </Wrapper>
  )
}

export default CartItem

const Wrapper=styled.section`
.quantity{
  display:flex;
  align-items:center;
  font-size:1.6rem;
  column-gap:1rem;
  .trash{ 
    cursor: pointer;
  color:red;
  font-size:2.4rem;
  }
}
.color{
    font-size:1.8rem;
      span{
     display:inline-block;
        width:14px;
    height:14px;
    border-radius:50%;
      } 
  }
.item{
   display:flex;
   align-items:center;
   column-gap:8px;
  div{

  } 
  img{
    width:10rem;
    height:10rem;
  }
 }   


`