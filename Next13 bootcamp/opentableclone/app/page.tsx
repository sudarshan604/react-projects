
import NavBar from "./component/NavBar"
import Header from "./component/Header"
import Link from "next/link"
import ResturantCard from "./component/ResturantCard"
const Home=()=>{


  return (
    <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
    
      <NavBar/>
   
      <main>

        <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
           <Header/>
        </div>
    
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
         <Link href="/resturant/milestone">
             <ResturantCard/>
        </Link>
        </div>
     
      </main>
    </main>
  </main>
  
  )
}

export default Home