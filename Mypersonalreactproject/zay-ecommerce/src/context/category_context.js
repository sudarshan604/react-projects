import reducer from "../reducer/category_reducer";
import { useReducer,useEffect, useContext } from "react";
import { createContext } from "react";
import { useGlobalProductContext } from "./product_context";
import { ALL_PRODUCT_BEGIN, SORT_PRODUCT,UPDATE_SORT,UPDATE_CATEGORY,SORT_CATEGORY } from "../action/action";


const CategoryContext=createContext()

export const CategoryProvider=({children})=>{

  
 const {products}=useGlobalProductContext()

 const initialState={
  All_Products:[],
  filter_Products:[],
   sort:'',
  filters:[{
     text:'',
     category:'all',
     company:'all',
     color:'all',
     price:0,
     max_price:0,
     min_price:0,
     shipping:false     
   }
  ]
 
}

const [state,dispatch]=useReducer(reducer,initialState)




useEffect(()=>{
   dispatch({type:ALL_PRODUCT_BEGIN,payload:products})
},[products])

useEffect(()=>{
 dispatch({type:SORT_PRODUCT})

},[state.sort])

useEffect(()=>{
   dispatch({type:SORT_CATEGORY})

},[state.sort_category])

const updateSort=(e)=>{
 const value=e.target.value
 dispatch({type:UPDATE_SORT,payload:value})
}

const sortCategory=(e)=>{
   let value=e.target.value
   const name=e.target.name
   if(name==="category")
   {
       value=e.target.textContent

 }
 if(name==="color")
   {
       value=e.target.dataset.color

 }

 console.log(value)

}


return <CategoryContext.Provider value={{...state,updateSort,sortCategory}}>
     {children}
</CategoryContext.Provider>



}


export const useGlobalCategoryContext=()=>{
 return useContext(CategoryContext)

}








