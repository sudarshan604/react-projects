import Navbar from "./Components/Navbar";
import CartComponent from "./Components/CartComponent";
import { calculateTotals } from "./features/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { getItems } from "./features/cartSlice";
import { useEffect } from "react";
import Modal from "./Components/Modal";

function App() {
  const {cart,isLoading} =useSelector(state=>state.cart)
  const {isOpen} =useSelector(state=>state.modal)
 

  const dispatch=useDispatch()

console.log(isLoading)

useEffect(()=>{

  dispatch(calculateTotals())
},[cart])
useEffect(()=>{

  dispatch(getItems())
},[])


  if(isLoading){
     return <main>
           <h2>Loading...</h2>
     </main>
  }


  return <main>

    {isOpen && <Modal/>}
      <Navbar/>
      <CartComponent />
</main>
}
export default App;
