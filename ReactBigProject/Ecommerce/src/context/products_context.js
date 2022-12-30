import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,

} from '../actions'

const initialState = {
 isSideBarOPen:false,
 isLoading:false,
 Error_loading:false,
 products:[],
 feature_Product:[],
 single_product_loading:false,
 single_product_error:false,
 single_product:{}

}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {

 const [state,dispatch]=useReducer(reducer,initialState)

const openSidebar=()=>{
   dispatch({type:'OPEN_SIDEBAR'})
}
const closeSidebar=()=>{
  dispatch({type:'CLOSE_SIDEBAR'})
}


const fetchProduct=async(url)=>{
 dispatch({type:GET_PRODUCTS_BEGIN})
try{
     const response= await axios.get(url)
     const data=response.data 
 
   dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
  }   
catch(error)
  {
     dispatch({type:GET_PRODUCTS_ERROR})
  }

}

const singleProduct=async(url)=>{
  dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
   try{
      const response=await axios.get(url)
      const data=response.data
     dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:data})    
    }
    catch{
      
     dispatch({type:GET_SINGLE_PRODUCT_ERROR})    
    } 

}



useEffect(()=>{
  fetchProduct(url)
},[])

  return (
    <ProductsContext.Provider value={{...state,openSidebar,closeSidebar,singleProduct}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
