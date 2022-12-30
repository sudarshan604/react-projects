import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars,reviews}) => {
 
  const tempStar=Array.from({length:5},(_,index)=>{
     
     const newIndex =index+0.5
    return(
          <span>
          {
            stars>=index+1?<BsStarFill/>:stars>=newIndex?<BsStarHalf/>:<BsStar/>
          }
       </span>  
  )

  })
  return <Wrapper>
     <div>
 
  <span>{tempStar}</span>
<p>({reviews} cusomer review)</p>

</div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
