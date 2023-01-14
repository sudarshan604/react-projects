import reducer from "../reducer/product_reducer";
import { useReducer,useEffect, useContext } from "react";
import { createContext } from "react";
import { PRODUCT_BEGIN,PRODUCT_SUCCESS,PRODUCT_Fail,SINGLE_PRODUCT_BEGIN,SINGLE_LOAD} from "../action/action";
import { url } from "../utils/Constraints";



const ProductContext=createContext()


const initialState={
  products:[],
  single_product:[],
  category_product:[],
  feature_product:[],
  isLoading:false,
  isError:false
}

export const ProductProvider=({children})=>{

const [state,dispatch]=useReducer(reducer,initialState)


const fetchData= async ()=>{
 dispatch({type:PRODUCT_BEGIN})

try{

   const response=await fetch(url)
   const data=await  response.json()
   dispatch({type:PRODUCT_SUCCESS,payload:data})

}
catch(error){
  
  dispatch({type:PRODUCT_Fail})

}

}

useEffect(()=>{
  fetchData()
},[])

const singleProduct= async (url)=>{
        dispatch({type:SINGLE_PRODUCT_BEGIN})
       try{
         const res=await fetch(url)  
        const data= await res.json()
       dispatch({type:SINGLE_LOAD,payload:data})
      }
 catch(error)
 {

 }

}



return <ProductContext.Provider value={{...state,singleProduct}}>
     {children}
</ProductContext.Provider>



}


export const useGlobalProductContext=()=>{
 return useContext(ProductContext)

}








