import React from 'react'
import  ReactDOM  from 'react-dom/client';
import App from './App';
import './app.css'
import { ProductProvider } from './context/product_context';
import { CategoryProvider } from './context/category_context';
import CartProvider from './context/cart_context';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
  domain="dev-vuiismic0ernsluo.us.auth0.com"
  clientId="FHpWWPFVQHCMMc5s5dUaqY6mO3sugIp6"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
   <ProductProvider>
       <CategoryProvider>
             <CartProvider>
                <App />
     </CartProvider>
       </CategoryProvider>
</ProductProvider>
  </Auth0Provider>
);
