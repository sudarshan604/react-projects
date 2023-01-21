import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

function AddCart({ stock }) {
  const [quantity, setQuantity] = useState(0);


useEffect(()=>{

if(quantity<0)
{
  setQuantity(1)
}
if(quantity>stock)
{
  setQuantity(stock)
}

},[quantity])


  return (
    <Wrapper>
      <h3>{stock > 0 ? "in stock" : "out of stock"}</h3>
      <div>
        <div className="quantity-box flex">
          <span>Quantity:</span>
          <div className="flex">
            <button onClick={() => setQuantity(quantity - 1)}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>
              <FaPlus />
            </button>
          </div>
        </div>
       <button type="button" className="add-btn">Add to Cart</button>
      
      </div>
    </Wrapper>
  );
}

export default AddCart;

const Wrapper = styled.div`
  .quantity-box {
    column-gap:.5rem;
    margin-top:1rem;
    span {
      font-size: 2.5rem;
    }
   div{
     column-gap:1rem;
     span{
       border-radius:3px;
        background-color:#6c757d;
         padding:1px 6px;
         color:#fff;
     }
    button{
      cursor: pointer;
      border-radius:3px;
      background-color:#59Ab6E;
      padding:12px 6px;
      border:none;
      color:#fff;
      font-size:1rem;
    }
   }
  }
 .add-btn{
  background-color:#59Ab6E;
  padding:6px 20px;
  border:none;
  border-radius:4px;
  margin-top:3rem;
  cursor: pointer;
  font-size:2.4rem;
  color:#fff;
 }
`;
