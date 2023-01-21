import reducer from "../reducer/category_reducer";
import { useReducer,useEffect, useContext } from "react";
import { createContext } from "react";
import { useGlobalProductContext } from "./product_context";
import { ALL_PRODUCT_BEGIN } from "../action/action";


const CategoryContext=createContext()


export const CategoryProvider=({children})=>{

  
 const {products}=useGlobalProductContext()

 const initialState={
  All_Products:[] 
 }

const [state,dispatch]=useReducer(reducer,initialState)




useEffect(()=>{
   dispatch({type:ALL_PRODUCT_BEGIN,payload:products})
},[products])


return <CategoryContext.Provider value={{...state}}>
     {children}
</CategoryContext.Provider>



}


export const useGlobalCategoryContext=()=>{
 return useContext(CategoryContext)

}








