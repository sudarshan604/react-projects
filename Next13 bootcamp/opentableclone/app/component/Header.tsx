"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
const Header = () => {
 
    const router=useRouter()
    const [location,setLocation]=useState(' ')
    return (
    <div className="text-center mt-10">
    <h1 className="text-white text-5xl font-bold mb-2">
      Find your table for any occasion
    </h1>
    {/* SEARCH BAR */}
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
       value={location}
       onChange={(e)=>setLocation(e.target.value)}
      />
      <button 
      onClick={()=>{
        if(location==="banana") return;
        router.push('/search')
      }}
      className="rounded bg-red-600 px-9 py-2 text-white">
        Let's go
      </button>
    </div>
    {/* SEARCH BAR */}
  </div>
  )
}

export default Header