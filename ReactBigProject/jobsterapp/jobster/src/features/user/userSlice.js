import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { json } from 'react-router-dom'
import {toast} from "react-toastify"
import customFetch from '../../utils/axios'
import { addUserToLocalStorage, getUserFromLocalStorage } from '../../utils/localStorage'




const initialState={
    isLoading:false,
    user:getUserFromLocalStorage()
}


export const registerUser=createAsyncThunk('user/register',
async(user,thunkApi)=>{
    try{
        const resp=await customFetch.post('/auth/register',user)
        return resp.data  
    }
     catch(error){
        return thunkApi.rejectWithValue(error.response.data.msg)
    }

})

export const loginUser=createAsyncThunk('user/loginUser',
async(user,thunkApi)=>{
    try{
        const resp=await customFetch.post('/auth/login',user)
        return resp.data  
    }
     catch(error){
        return thunkApi.rejectWithValue(error.response.data.msg)
    }
 
})




const userSlice=createSlice({
    name:"user",
    initialState,


    extraReducers:{
        [registerUser.pending]:(state)=>{
            state.isLoading=true
        },
        [registerUser.fulfilled]:(state,{payload})=>{
             const {user}=payload
             state.isLoading=false
             state.user=user
              addUserToLocalStorage(user)
             toast.success(`hello there ${user.name}`)
        },      
        [registerUser.rejected]:(state,{payload})=>{
            state.isLoading=false
            toast.error(payload)
   },     


   [loginUser.pending]:(state)=>{
    state.isLoading=true
},
[loginUser.fulfilled]:(state,{payload})=>{
     const {user}=payload
     state.isLoading=false
     state.user=user
     addUserToLocalStorage(user)
     toast.success(`welcome back ${user.name}`)
},      
[loginUser.rejected]:(state,{payload})=>{
    state.isLoading=false
    toast.error(payload)
}      
}

})

export default userSlice.reducer
