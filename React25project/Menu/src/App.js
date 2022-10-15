import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

const allCategories= ['all',...new Set(items.map(item=>item.category))]
console.log(allCategories)

function App() {
  const [menuItem,setMenuItem]=useState(items)
  const [category,setCategory]=useState(allCategories)
  
const selectItem=(categoryItem)=>{
  if(categoryItem==="all")
  {
     setMenuItem(items)
     return
    }
 const newCategory = items.filter(item=>item.category===categoryItem)
  setMenuItem(newCategory)
}


 return <main>
       <section className='menu section'>
         <div className='title'>
           <h2>our menu</h2>
            <div className='underline'></div>
         </div>
          <Categories categories={category}  selectItem={selectItem}/>
          <Menu item={menuItem} />
       </section>

  </main>
}

export default App;
