import React from 'react'
import styled from 'styled-components'


function FilterCategory({category=[]}) {
  
  return (
    <Wrapper>
        <h2 className='title'>Category</h2>
    <div>
        {category.map((item,index)=>{
                 return <h3 key={index}>{item}</h3>          
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
    }
    }

`