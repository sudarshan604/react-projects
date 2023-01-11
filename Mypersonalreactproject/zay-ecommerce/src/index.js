import React from 'react'
import  ReactDOM  from 'react-dom/client';
import App from './App';
import './app.css'
import { ProductProvider } from './context/product_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ProductProvider>
        <App />
</ProductProvider>
);
