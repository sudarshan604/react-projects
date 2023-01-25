import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useGlobalCategoryContext } from '../context/category_context'

function FilterCategory({category=[]}) {
  const [isUnderline,setUnderline]=useState('')

  const {sortCategory}=useGlobalCategoryContext()

  return (
    <Wrapper>
        <h2 className='title'>Category</h2>
    <div>
        {category.map((item,index)=>{
                 return <h3  className={`${isUnderline===item?"active":null}`}  onClick={()=>{
                  setUnderline(item)
                  sortCategory(item)
                }}  key={index}>{item}</h3>          
        })}
    </div>


    </Wrapper>
  )
}

export default FilterCategory


const Wrapper=styled.div`
  .title{
    font-size:2.4rem;
    color:#888;
    margin-bottom:2rem;
  }
 div{
    display:flex;
    flex-direction:column;
     row-gap:.8rem;
   h3{
     color:#707c94;
    cursor: pointer;
    width:fit-content;
    padding-bottom:0.1rem;  
  }

    }
.active{
  box-shadow:0px 2px 1px #008000;
}
`