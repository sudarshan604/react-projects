import Navbar from "./Components/Navbar";
import CartComponent from "./Components/CartComponent";
import { calculateTotals } from "./features/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import Modal from "./Components/Modal";

function App() {
  const {cart} =useSelector(state=>state.cart)
  const dispatch=useDispatch()
useEffect(()=>{

  dispatch(calculateTotals())


},[cart])


  return <main>
      <Modal/>
      <Navbar/>
      <CartComponent />
</main>
}
export default App;
