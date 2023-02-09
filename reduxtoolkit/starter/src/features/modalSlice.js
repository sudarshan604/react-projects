import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState={
    isOpen:false
}

const modalSlice=createSlice({
  name:"modal",
  initialState,
  reducers:{
      openModal:(state,action)=>{
        state.isOpen=true
      },
      closeModal:(state,action)=>{
        state.isOpen=false
      }

  }
})

export const {openModal,closeModal}=modalSlice.actions

export default modalSlice.reducer