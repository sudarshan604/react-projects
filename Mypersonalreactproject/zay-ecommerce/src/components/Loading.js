import React from 'react'
import styled from 'styled-components'
function Loading() {
  return (<Wrapper>
  <div className='loading'></div>
  </Wrapper>
  )
}

export default Loading


const Wrapper=styled.div`
       display:flex;
       justify-content:center;
       align-items:center;
       width:100%;
       height:100vh

`