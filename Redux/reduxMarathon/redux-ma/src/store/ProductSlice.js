import { createSlice } from "@reduxjs/toolkit"
const initialData={
    products:[
        {pname:"apple",price:3},
        {
            pname:"Banana",price:20
        },
        {
            pname:"Orange",price:10
        },
        {
            pname:"Grapes",price:8
        },
        {
            pname:"mango",price:45
        }
    ],
    cart:[{
        pname:"apple",price:30
      },
      {  
        pname:"Banana",price:40
      }
    ],
    total:0,
}

const ProductSlice=createSlice({
    name:'product',
    initialState:initialData,
    reducers:{
        Purchase:(state,action)=>{
            
        }
    }


})













