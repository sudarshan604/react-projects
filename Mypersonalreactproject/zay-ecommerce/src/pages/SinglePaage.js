import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useGlobalProductContext } from '../context/product_context'
import {singleUrl} from '../utils/Constraints'

const SingleProduct=()=> {
  
  const {singleProduct}=useGlobalProductContext()

  const {id}=useParams()

useEffect(()=>{
   singleProduct(`${singleUrl}${id}`)
},[id])


  console.log(id)
  return (<Wrapper>    
            <section className='section-first'>
                       <div>
                               <figure>
                                <img src="" alt="" />
                               </figure>
                       </div>
                       
        <div>

        </div>

  </section>

 
   </Wrapper>
  )
}

export default SingleProduct

 const Wrapper=styled.div`
    
   

    
   
 


`