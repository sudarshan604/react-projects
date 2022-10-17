import React, { useState } from 'react';
import {data} from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [data1,setData]=useState(data)

  const removeItem=(id)=>{
  const newData=data1.filter(item=>item.id!==id)
    
  setData(newData)

  }
  return <section>
   <h3>props drilling</h3>
   <List people={data1} removeItem={removeItem}/>

  </section>;
};

export default PropDrilling;

const List=({people,removeItem})=>{
    return<>
      {people.map((person)=>{
         return(
             <SinglePerson key={person.id} {...person} removeItem={removeItem}/>
         )

      })}
     
    </>
}

const SinglePerson=({id,name,removeItem})=>{
   return <div className='item'>
       <h4>single item{id}</h4>
        <button onClick={()=>{
         return removeItem(id)
          
          }}>remove item</button>
</div>
}