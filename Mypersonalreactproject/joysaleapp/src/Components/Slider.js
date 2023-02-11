import React from 'react'
import styled from 'styled-components'

function Slider({id,img,name}) {
    return (
    <Wrapper className='flex'>
        <img src={img} alt="name"/>
        <h3>{name}</h3>
    </Wrapper>
  )
}

export default Slider

const Wrapper=styled.section`
    align-items:center;
    column-gap:1rem;
    padding:1.2rem 1rem;
    font-size:1.6rem;
     padding:1.6rem 1.5rem 1.6rem 4rem;
  min-width:fit-content;
     img{
        width:3rem;
    }
    h3{
       font-weight:600;
}

`