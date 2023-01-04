import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'
import userEvent from '@testing-library/user-event'

const initialState = {
  all_products:[],
  filter_products:[],
  grid_view:false

}

const FilterContext = React.createContext()


export const FilterProvider = ({ children }) => {
  const {products}=useProductsContext()
   const [state,dispatch]=useReducer(reducer,initialState)

useEffect(()=>{
      dispatch({type:LOAD_PRODUCTS,payload:products})

  },[products])
 
const gridView=()=>{
  dispatch({type:SET_GRIDVIEW})
}
const listView=()=>{
  dispatch({type:SET_LISTVIEW})
}

  
  return (
    <FilterContext.Provider value={{...state,gridView,listView}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
