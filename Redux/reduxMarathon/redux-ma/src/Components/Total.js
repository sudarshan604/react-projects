import React from 'react'
import { useSelector } from 'react-redux'

const Total = () => {
    const total=useSelector(state=>state.total)
  return (
    <div>
         <p>total component:{total}</p>
    </div>
  )
}

export default Total