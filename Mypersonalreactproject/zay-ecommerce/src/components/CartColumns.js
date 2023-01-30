import styled  from "styled-components"

function CartColumns() {
  return (
    <Wrapper className="container">
    <div className='cart-grid'>
       <h3>item</h3>
       <h3>price</h3>
       <h3>Quantity</h3>
       <h3>subtotal</h3>
    </div>
 </Wrapper>
  )

}

export default CartColumns

export const Wrapper=styled.div`
 h3{
      font-size:2.2rem;
     }
  
`