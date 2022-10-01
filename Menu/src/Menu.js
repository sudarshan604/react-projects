import React from 'react';

const Menu = ({item}) => {
  return<div className='section-center'>
  {item.map(person=>{
   const {id,title,img,desc,price}=person
   return <div className='menu-item' key={id}>
           <img src={img} alt={title} className='photo'/>
          <div className='item-info'>
                <header>
                    <h4>{title}</h4>
                    <h4 className='price'>{price}</h4>
                  </header> 
                  <p className='item-text'>{desc}</p>
         </div>
  </div>
  })  
}
</div>

};

export default Menu;
