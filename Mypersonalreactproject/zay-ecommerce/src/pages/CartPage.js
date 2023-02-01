import { Link } from "react-router-dom"
import styled  from "styled-components"
import { CartColumns, CartContent,CartItem} from '../components'
import { useGlobalCartContext } from "../context/cart_context"
function CartPage() {
  const {cart}=useGlobalCartContext()

if(cart.length<1)
{
   return <Wrapper className="container no-item">
        <h1>no, item found in the cart</h1>
        <Link to="/products" className="link">go to shop</Link>
   </Wrapper>
}

  return (
    <div className='container'>
   <Wrapper>
            <CartContent/>
    </Wrapper>
    </div>
  )
}

export default CartPage

const Wrapper =styled.section`
  .no-item{
    h3{
     font-size:4rem;
    }

    }
.link{
  text-decoration:none;
  font-size:1.8rem;
}
    margin-top:10rem;
  

`