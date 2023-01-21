import React from 'react'
import styled from 'styled-components'
  const ProductCard=({item})=>
  {
 
 
     const {id,image,name,price}=item
 
 console.log("items=",item)
    return (
    <Wrapper>

    <div>
        <figure>
           <img src={image} alt={name}/>
        </figure>
        <h3>{name}</h3>
         <h3> {price}</h3>
    </div>
    </Wrapper>
  )
}

export default ProductCard

const Wrapper=styled.div`
   div{
      width:100%;
    img{
      width:100%;
    }
    }


`
