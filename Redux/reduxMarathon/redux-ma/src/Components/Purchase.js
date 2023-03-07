import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
 

const Purchase = () => {
  
  const produxts=useSelector(state=>state.products)  
    const dispatch=useDispatch()
  const purchaseHandler=(e)=>{
 
     
     let pname= e.target.options[e.target.selectedIndex].text
     let price=e.target.value
     let obj={pname,price}
    dispatch({type:"PURCHASE",payload:obj})    
  }
  return (
    <div>
         <h2>Purchase component</h2>
    <select onChange={(e)=>purchaseHandler(e)}>
   {
       produxts.map((item,index)=>{
           return <option key={index} value={item.price}>{item.pname}</option>
    })
}
</select>

    </div>
  )
}

export default Purchase