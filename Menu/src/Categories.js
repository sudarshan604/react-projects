import React from 'react';

const Categories = ({selectItem}) => {
  
  
  return <div className='btn-container'>
    <button className='filter-btn' onClick={()=>selectItem('breakfast')}>breakfast</button>


  </div>
}
export default Categories;
