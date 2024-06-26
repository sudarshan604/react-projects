import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,About,Error,Single,Product,Cart,CheckOut,PrivateRoute} from './pages'
import {SharedProduct} from './components'




function App() {
  return (
    <BrowserRouter>
         <Routes>
             <Route path="/" element={<SharedProduct/>}>
                <Route index  element={<Home/>}/>
                <Route  path='/about' element={<About/>}/>
                <Route  path='/products' element={<Product/>}/>
                <Route  path='/cart' element={<Cart/>}/> 
                <Route  path='/checkout' element={ <PrivateRoute>
                             <CheckOut/>
                       </PrivateRoute>}/> 
         
                <Route  path='/products/:id' element={<Single/>}/>
                <Route  path='*' element={<Error/>}/>
           </Route>
         </Routes>
        
        
  </BrowserRouter>


  );
}

export default App;
