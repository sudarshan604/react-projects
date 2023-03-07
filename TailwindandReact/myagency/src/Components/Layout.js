import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Layout({children}) {

    const location=useLocation()
   


   const data=[
    {
        title:"Home",
        path:"/",
        icon:'ri-home-3-line'
    },
    {
        title:"About",
        path:"/about",
        icon:'ri-information-line'
    },
    {
        title:"Client",
        path:'/client',
        icon:'ri-folder-user-fill'
    },
    {
        title:"Contact",
        path:'/contact',
        icon:'ri-contacts-line'
    }

   ]
   
   return (<>
   <div className='content'>
        {children}
   </div>
    <div className='fixed bottom-0  w-full'>
       <div className='flex  justify-center'>
            {data.map((item,index)=>{
             
             return(<div className='flex flex-col justify-end items-center'>
                    {location.pathname===item.path &&<div className='flex justify-end'>
                           <div className='w-4 h-4 bg-black'></div>
                           <div className='w-8 h-4 bg-black'></div>
                        </div>}
              <div className={`bg-primary px-20 py-5  ${index===0 && 'rounded-l'} ${index==data.length-1 && 'rounded-r'} flex justify-center items-center space-x-2 `}>
                     <i className={`${item.icon} text-secondary text-xl`}></i>
                      <Link to={item.path} className="text-secondary">{item.title}</Link>
                </div>
            </div> 
             ) })
        
        }
         
        </div>   
 
    </div>
    </>
    )
}

export default Layout