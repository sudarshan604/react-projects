import React from 'react';

const Categories = ({selectItem,categories}) => {
  
  
  return <div className='btn-container'>
    { categories.map(item=>{
        return (
          <button className='filter-btn' onClick={()=>selectItem(item)}>{item}</button>
    )

     })}
  </div>
}
export default Categories;
