import styled from 'styled-components'
import {BiSearchAlt} from  "react-icons/bi";
import {MdLocationPin} from "react-icons/md"
import {BsCamera} from "react-icons/bs"
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from "react-icons/ai"
import Slider from './Slider';
import data from '../data/data';
import { useState } from 'react';
import { useRef } from 'react';
function Navbar() {
   
    const scrollElement=useRef()
   
    const elem=scrollElement.current.getBoundingClientRect();

    console.log(elem.width)

    function rightSlide(){
        scrollElement.current.scrollLeft += 10;  
         
    }
    function leftSlide(){
        scrollElement.current.scrollLeft-=10;  
      }

    return (
   <Wrapper>
     <header className='flex'>
         <figure>
           <img src={"https://joysale.appkodes.in/frontend/web/media/logo/7470_3208_6644_app_logo.png"} alt="title name"/>
          </figure>
         <div className='search-field'>
            <div className='first-i'>
              <span>
                <BiSearchAlt className='icon'/>
            </span>
            <input type="text" placeholder='Search products'/>  
            </div>
            <div className='second-i'>
               <span><MdLocationPin className='icon'/></span>
               <input type="text" placeholder='Global Stuff'/>
               <div className='sp'>Go</div>  
             </div>
          </div>
        <ul>
           <li>Log in</li>
           <li>Sign up</li>
           <li>
            <BsCamera/>
            SELL
            </li>
        </ul>
     </header>
     <footer>
 <section ref={scrollElement} className='slider-section'>
       {data.map(item=>{
           return<Slider key={item.id} {...item}/>
        })}
 </section>
                <button onClick={rightSlide} className="btn btn-right">
                     <AiOutlineRight className='icon'/>
                </button>
                <button onClick={leftSlide}  className="btn btn-left">
                     <AiOutlineLeft className='icon'/>
                </button>
        </footer>
 
    </Wrapper>
  )
}

export default Navbar

const Wrapper=styled.nav`
 header{
     padding:1.2rem 2rem;
    background-color:#e40046;
   font-size:1.4rem;
    color:#fff;
    justify-content:space-between;
    align-items:center;
  .search-field{
    display:flex;
    align-items:center;
    width:41.1%;
   background-color:#fff;
   overflow:hidden;
    border-radius:5px;
      .first-i{
        width:50%;
       display:flex;
     align-items:center;
     border-right:1px solid brown;
     input{
        margin-left:.5rem;
     }
      input::-webkit-input-placeholder {
         opacity:.4;
        font-weight:700;
        color:#222;  
    }
  
    }
    .second-i{
       display:flex;
       width:50%;
       align-items:center;
       padding-left:.5rem;
      input{
        margin-left:.5rem;
}
     .sp{
        color:#444;
     font-weight:700;
   background-color:#999;
    align-self:center;
    align-content:stretch;
   margin-left:auto;
  padding:0 1.5rem;
 
}
    }
    .icon{
    color:brown;
    font-size:2rem;
   }
   input{
        border:none;
       outline:none;
    background:transparent;
    height:4rem;    
}
  }

    img{
    height:2.9rem;
  }
 ul {
     display:flex;
     justify-content:space-between;
     row-gap:2rem;
     width:15%;
 li{
  list-style:none;;
  font-weight:700;
}
 li:last-child{
    border:1px solid #fff;
 }
  }

}
.slider-section{
  display:flex;
 overflow:hidden;
 width:95%;
 margin:0 auto;
}
.btn{
   position:absolute;
    font-size:20px;
   transform:translateY(-50%); 
  border:none;
  background:transparent;
  font-size:2.2rem;
  color:#333;
 cursor: pointer;
  .icon{
    font-weight:700;
  }
}
 .btn-right{
    top:50%;
   right:1rem;
}
.btn-left{
    top:50%;
   left:1rem;
}
footer{
    position:relative;
}
`
