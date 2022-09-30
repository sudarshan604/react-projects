import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
    
  const [index,setIndex]=useState(0)
    
  const {name,job,image,text}=people[index]

const checkNumber=(number)=>{
   if(number<0)
   {
     return people.length-1
   }
  if(number>people.length-1)
  {
      return 0
  }
   return number
  }

const handleNextbtn=()=>{
  //  if(index<=0 && index>=3){  
  //   setIndex(0) 
  // }
    setIndex(prev=>{ 
      let newIndex=prev+1
      return checkNumber(newIndex)

     })
   
  }
const handlePrevBtn=()=>{ 
                                    // if(index<0)
                                   // {
                                  //    setIndex(people.length-1)
                                // }
  setIndex(next=>{
   let prevIndex=next-1
   return checkNumber(prevIndex)

   })
  
}
const randomNumber=()=>{

     const randomNumber= Math.floor(Math.random()*people.length)  
  console.log(randomNumber)
       if(randomNumber===index)
    {
    const randomNumber=index+1
    }
    setIndex(checkNumber(randomNumber))
   
    }


  return(

<article className='review'>
          <div className='img-container'>
                <img src={image} alt={name} className='person-img'/>

          <span className='quote-icon'>
             <FaQuoteRight />
          </span>
          </div>
            <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
       <p className='info'>{text}</p>
      <div className='btn-container'>
         <button className='prev-btn' onClick={handlePrevBtn}>
             <FaChevronLeft/>
         </button>
         <button className='next-btn' onClick={handleNextbtn}>
            <FaChevronRight/>
         </button>
         <button className='random-btn' onClick={randomNumber}>
             suprise me
         </button>
      </div>
      </article>
  )
};

export default Review;
