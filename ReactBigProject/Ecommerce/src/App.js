import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home,About,Cart,Checkout,Error,PrivateRoute,Product,Single} from './pages'





function App() {
  return(
     <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Switch>
           <Route exact path='/'><Home/></Route>
           <Route exact path='/About'><About/></Route>
           <Route exact path='/cart'><Cart/></Route>
           <Route exact path='/checkout'><Checkout/></Route>
           <Route exact path='/product'><Product/></Route>
           <Route exact path='/product/:id' children={<Single></Single>} />
           <Route exact path="*">
             <Error/>
           </Route>
        
        </Switch>
        <Footer></Footer>
     </Router>
  )
}

export default App
