import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
function CheckoutPage() {
  const {user}=useAuth0()
  return (
    <Wrapper className='container'>
         <div>

         <h1>Hello,<br/>
            {user.name}
          </h1>      
         </div>
    </Wrapper>
  )
}

export default CheckoutPage

const Wrapper=styled.div`
    div{
      margin-top:10rem;
    }

`
