import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useGlobalProductContext } from '../context/product_context'
import {singleUrl} from '../utils/Constraints'
import { useState } from 'react'
import { Loading,ProductImage,Color,AddCart } from '../components'
import Star from '../components/Star'


const SingleProduct=()=> {
  
  const {singleProduct,single_product:product,isLoading,isError}=useGlobalProductContext()
  const {id}=useParams()
  
  
  
useEffect(()=>{
   singleProduct(`${singleUrl}${id}`)
},[])



if(isLoading)
{
 return <Loading />
}



const {images,name,description,price,company,stars,colors,stock}=product
  
console.log(product)
  return (<Wrapper>   
    <div className='container'>
            <section className='section-first'>
                        <div className='image-div bg-w'>
                               <figure>
                                 {<ProductImage images={images} />}
                               </figure>
                         <div className='text-div bg-w flex'>
                             <h3>{name}</h3>
                             <h4>{price}</h4>
                              <Star star={stars}/>
                              <h4>company:<span className='less-op'>{company}</span></h4>
                             <h3>colors</h3>
                              <div className='flex color-div'>
                                  <Color colors={colors}/>
                              </div>
                            <div className='desc'> 
                               <h3 className='heading-tertiary'>Description:</h3>
                              <p>{description}</p>
                            </div>
                          <AddCart stock={stock}/>
                         </div>
                       </div> 
                      
        <div>

        </div>

  </section>
     <h1 className='secondary-heading'>Related Products</h1>
  </div> 
 </Wrapper>
  )
 }

export default SingleProduct

 const Wrapper=styled.div`
 padding-top:7rem;
   background-color:#e9eef5 !important;

   .image-div{
      background-color:#e9eef5 !important;
      display:grid;
      grid-template-columns:40% 60%;
      column-gap:6rem;
      figure{
        img{
          width:100%;
        }
       }

    }
   .text-div {
    padding:3rem;
     flex-direction:column;
     align-items:flex-start;
     row-gap:3rem;
     color:#343a40;
    .less-op{
      opacity:.6;
      font-size:2.2rem;
    }
     h3{
      font-size:3rem;
      font-weight:300;
     }
     h4{
      font-size:2.2rem;
      
    }
  .heading-tertiary{
    font-size:1.6rem;
    font-weight:600 !important;
  }
   .desc p{
    margin-top:.7rem;
      max-width:75%;
      font-size:1.8rem;
      line-height:1.5;
      font-weight:300;
     }
  }
.secondary-heading{
   padding:3rem 0;
   font-size:2.4rem;
}

`