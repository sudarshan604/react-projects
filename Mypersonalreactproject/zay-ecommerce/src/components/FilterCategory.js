import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { useGlobalCategoryContext } from '../context/category_context'
import { uniqueValue } from '../utils/Constraints'
function FilterCategory() {
  const [isUnderline,setUnderline]=useState('')
  const [mainColor,setMainColor]=useState('')
  const {sortCategory,All_Products,filters:{price,max_price,min_price,shipping}}=useGlobalCategoryContext()

 const category=uniqueValue(All_Products,"category") 
 const company=uniqueValue(All_Products,'company')
 const colors =uniqueValue(All_Products,'colors')

console.log(price,max_price,min_price)
 
  return (
    <Wrapper>
        <h2 className='title'>Category</h2>
    <div className='category'>
        {category.map((item,index)=>{
                 return <button  className={`${isUnderline===item?"active":null}`} 
                 name="category"
                 onClick={(e)=>{
                  sortCategory(e)
                  setUnderline(item)
              
                }}  key={index}>{item}</button>          
        })}
    </div>
    <h2 className='title mg-t'>Company</h2>
    <select
            name="company"
            onChange={sortCategory}
           className="se"
          >
        {company.map((item,index)=>{
      
            return <option key={index} value={item}>{item}</option>
            })}             
      </select> 
      <h2 className='title mg-t'>colors</h2>
       <div className='color'>
       {colors.map((item,index)=>{
        if(item=="All")
        {
           return<button
           key={index}
           data-color="all" 
            name="color"
           style={{color:"#707c94"}}  onClick={(e)=>{
            sortCategory(e)     
            setMainColor('')}}>All</button>
        }
      return <button 
     key={index}
      name="color"
      data-color={item}
      style={{backgroundColor:item}} onClick={(e)=>{
        setMainColor(item)
        sortCategory(e)

      }}>{item===mainColor&& <FaCheck/>}</button>
      })}        

       </div>
<div>
<h2 className='title mg-t'>price</h2>
  
</div>
  

    </Wrapper>
  )
}

export default FilterCategory


const Wrapper=styled.div`
  .title{
    font-size:2.4rem;
    color:#888;
    margin-bottom:2rem;
  }
  .se{
  border:none;
  color:#707c94; 
  
}
.category{
   button{
    border:none;
    background:transparent;
    width:fit-content;
    cursor: pointer;
   }
}

  .mg-t{
    margin-top:20px;
     margin-bottom:7px;
  }
  .btn{
    border:none;
  }
 div{
    display:flex;
    flex-direction:column;
     row-gap:.8rem;
   h3{
     color:#707c94;
    cursor: pointer;
    width:fit-content;
    padding-bottom:0.1rem;  
  }

    }
.active{
  box-shadow:0px 2px 1px #008000;
}
.color{
  display:flex;
   flex-direction:row;
   align-items:center;
   column-gap:3px;
   button{
    cursor: pointer;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    border:none;
    width:20px;
    height:20px;
  }
}
`