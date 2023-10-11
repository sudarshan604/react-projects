'use client'
import React from 'react'

interface Props{
    error:Error
    reset:()=> void
}

const ErrorPage = ({error,reset}:Props) => {
    console.log('Erroe',error)
  return (
    <>
    <div>an unexpected error occur</div>
     <button className='btn' onClick={()=>reset()}></button>
    </>
  )
}

export default ErrorPage