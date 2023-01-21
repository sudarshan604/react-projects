
import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'

function ProductList({products}) {
 
console.log(products)
  return (
     <Wrapper>
      {products.map((item,index)=>{
         return <ProductCard key={index} item={item}/>
      })}
      
    </Wrapper>
  )
}

export default ProductList

const Wrapper=styled.div`
   display:grid;
   grid-template-columns:repeat(3,1fr);

`