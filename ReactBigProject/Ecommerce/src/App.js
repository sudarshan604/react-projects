import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home,About,Cart,Checkout,Error,PrivateRoute,Product,Single} from './pages'
import AuthWrapper from './pages/AuthWrapper'




function App() {
  return(
 <AuthWrapper>
    <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Switch>
           <Route exact path='/'><Home/></Route>
           <Route exact path='/About'><About/></Route>
           <Route exact path='/cart'><Cart/></Route>
           <Route exact path='/products'><Product/></Route>
           <PrivateRoute  exact path='/checkout' >
            <Checkout/>
           </PrivateRoute>

           <Route exact path='/product/:id' children={<Single></Single>} />
           <Route exact path="*">
             <Error/>
           </Route>
        
        </Switch>
        <Footer></Footer>
     </Router>
 </AuthWrapper>
  )
}

export default App
