import { AiOutlineMail,AiOutlineSearch,AiOutlineShoppingCart,AiOutlineUserAdd,AiHam } from "react-icons/ai";
import {FiMenu} from "react-icons/fi"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { header } from "../utils/Helper";
import { useGlobalProductContext } from "../context/product_context";
import Sidebar from "./Sidebar";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobalCartContext } from "../context/cart_context";

const NavBar=()=>{
const {isOpen,openSideBar}=useGlobalProductContext()
const {total_items}=useGlobalCartContext()
const { loginWithRedirect,user, isAuthenticated,logout } = useAuth0();

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
                 <li>
               {  isAuthenticated && <Link className="header-link" to='/checkout'>checkout</Link>
}
                 </li>
            </ul>
           <section className="header-icons flex">
                  <div className="relative">
                <Link to="/cart" className="btn flex">
                     Cart <AiOutlineShoppingCart className="icon"/>
                </Link> 
                <span className="total-i flex"> {total_items} </span>
                  </div>
                {user?<button onClick={()=>logout({ logoutParams: { returnTo: window.location.origin }}) } className="btn flex">
                     logout<AiOutlineUserAdd className="icon"/>
                </button>:
                <button onClick={loginWithRedirect} className="btn flex">
                       login<AiOutlineUserAdd className="icon"/>
                </button>
      } 
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
.relative{
  position:relative;
}
.total-i{
  justify-content:center;
  padding:.3rem;
  width:2rem;
  height:2rem;
  position:absolute;
  top:-1rem;;
  font-size:2rem;
  color:#fff;
  background-color:#ab7a5b;
  border-radius:50%;
  right:-2rem;
}

.btn{
   border:none;
  cursor: pointer;
  background:transparent;
 font-size:2rem;
 text-decoration:none;
}

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
   column-gap:2rem;
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