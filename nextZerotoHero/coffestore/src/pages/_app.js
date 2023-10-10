import '@/styles/globals.css'
import { createContext, useReducer } from 'react'

export const StoreContext=createContext()

export const ACTION_TYPES={
  SET_LAT_LONG:'set_lat_long',
  SET_COFFEE_STORES:"set_coffe"
}


const storeReducer=(state,action)=>{

  switch(action.type){
  case ACTION_TYPES.SET_LAT_LONG:{
      return {...state,latLong:action.payload.latLong   }

  }
  case ACTION_TYPES.SET_COFFEE_STORES:{
         console.log(action.payload)
          return {...state,coffeeStores:action.payload.coffeeStores  }

  }
  
  default:
    throw new Error(`unhandled action type:${action.tyoe}`)
  

  }
}


const StoreProvider=({children})=>{
 const initialState={
   latLong:"",
   coffeeStores:[]
 }
 
const [state,dispatch]=useReducer(storeReducer,initialState)

 return <StoreContext.Provider value={{state,dispatch }}>
    {children}
  </StoreContext.Provider>
}

export default function App({ Component, pageProps }){
  return<StoreProvider>
       <Component {...pageProps}/>
  </StoreProvider>
  }
