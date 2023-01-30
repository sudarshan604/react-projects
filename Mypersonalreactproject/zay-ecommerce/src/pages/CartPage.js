import { Link } from "react-router-dom"
import styled  from "styled-components"
import { CartColumns, CartContent,CartItem} from '../components'
import { useGlobalCartContext } from "../context/cart_context"
function CartPage() {
  const {cart}=useGlobalCartContext()

if(cart.length<1)
{
   return <div className="container">
        <h3>no, item found in the cart</h3>
        <Link to="/products">go to shop</Link>
   </div>
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
  margin-top:10rem;
  

`