import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItem,setMenuItem]=useState(items)
  const [category,setCategory]=useState([])
  
const selectItem=(categoryItem)=>{
 const newCategory = items.filter(item=>item.category===categoryItem)
  setMenuItem(newCategory)
}


 return <main>
       <section className='menu section'>
         <div className='title'>
           <h2>our menu</h2>
           <div className='underline'></div>
         </div>
          <Categories  selectItem={selectItem}/>
          <Menu item={menuItem} />
       </section>

  </main>
}

export default App;
