import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({user}) => {

const [showInfo,setShow]=useState(false)  
  return <article className='question'>
        <header>
           <h4>{user.title}</h4>
         <button className='btn' onClick={()=>setShow(!showInfo)}>
            {showInfo?<AiOutlinePlus/>:<AiOutlineMinus/>}
 

         </button>

        </header>
          {showInfo && <p>{user.info}</p>}    
  </article>
};

export default Question;
