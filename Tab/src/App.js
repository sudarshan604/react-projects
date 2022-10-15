import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const[data,setData]=useState([])
  const[count,setCount]=useState(0)
  const [isLoading,setLodaing]=useState(true)
  const fetchData= async ()=>{
    const res= await fetch(url)
    const data= await res.json()
    setData(data)
    setLodaing(!isLoading)
  }
 useEffect(()=>{
    fetchData()
 },[])

 if(isLoading)
 {
    return(
      <section className='section loading'>
           <h1>loading...</h1>
      </section>
    )
 }
const {company,title,dates,duties}=data[count]

 return <section className='section'>
       <div className='title'>
         <h2>experience</h2>
         <div className='underline'></div>
       </div>
  <div className='job-center'>
     
     <article className='job-info'>
          <h3>{title}</h3>
         <h4>{company}</h4>
         <p className='job-dates'>{dates}</p>
    {duties.map((duty,index)=>{
           return(
              <div key={index} className="job-desc">
                 <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
           )

    })}
     </article>
  </div>

 </section>
}

export default App
