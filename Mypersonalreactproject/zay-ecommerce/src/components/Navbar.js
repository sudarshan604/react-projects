import { AiOutlineMail,AiOutlineSearch,AiOutlineShoppingCart,AiOutlineUserAdd,AiHam } from "react-icons/ai";
import {FiMenu} from "react-icons/fi"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { header } from "../utils/Helper";
import { useGlobalProductContext } from "../context/product_context";
import Sidebar from "./Sidebar";
import React from "react";
const NavBar=()=>{
const {isOpen,openSideBar}=useGlobalProductContext()

    return (<React.Fragment>
         {isOpen && <Sidebar/> }
      <Wrapper>
         <nav className="first-nav container">
            <div>
              <AiOutlineMail/>
             <a href="mailto:info@gmail.com">info@gmail.com</a>
             <a href="tel:010-020-0340">010-020-0340</a>
            </div>
         <div className="header-icon-box">
             
         </div>
  
         </nav>
         <div className="bg-w">
         <section className="bottom-header container flex">
               <figure className="logo-box">
               <img className="logo" src="images/logo.png" alt="logo image" />
               </figure>
             <ul className="page-navigation flex">
                {header.map((item)=>{
                  
                  return <li key={item.id}>
                  
                  <Link className="header-link" to={item.pagination}>{item.name}</Link>
                  </li>
                })}

            </ul>
           <section className="header-icons flex">
                 <AiOutlineSearch className="icon"/>
                  <Link to="/cart">
                       <AiOutlineShoppingCart className="icon"/>
                </Link> 
                 <AiOutlineUserAdd className="icon"/>
           </section>
          <div className="ham">
             <FiMenu onClick={()=>openSideBar()} className="icon ham-icon"/>
          </div>
         
          </section> 
          </div>
      </Wrapper>
                </React.Fragment>
    )
}
export default NavBar

const Wrapper=styled.header`
 font-size:1.3rem;
 color:white;
 background-color:#212529;
 .first-nav{
   padding:.8rem 0;
    
   padding:1rem 0px;
   div{
   display:flex;
    gap:1rem;
   }
    div a{
      text-decoration:none;
      color:white;  
    }
 
  }
.logo-box{
  width:8rem;
}

  .logo{
    width:100%;
  }

.bottom-header{
 justify-content:space-between;
  padding:1rem 0;
  background-color:#fff;
  .page-navigation {
   justify-content:space-between;
   width:55rem;
  }
  
  .page-navigation li {
    list-style:none;
  }
  
  
 .header-icons{
   column-gap:1.4rem;
}
  
.icon{
  fill:#111;
  font-size:3rem;
  cursor: pointer;
} 

.ham-icon{
  color:#777;
  margin-right:8rem;
 
}
}
.ham{
  display:none;
 cursor: pointer;
}
@media (max-width: 900px) {
    .page-navigation,.header-icons{
      display:none
    }
   .ham{
    display:block;
   }
  }
`