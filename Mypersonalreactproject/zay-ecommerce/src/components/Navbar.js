import { AiOutlineMail,AiOutlineSearch,AiOutlineShoppingCart,AiOutlineUserAdd } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { header } from "../utils/header";

const NavBar=()=>{

    return (
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
                 <AiOutlineShoppingCart className="icon"/>
                 <AiOutlineUserAdd className="icon"/>
           </section>
         
         
          </section> 
          </div>
      </Wrapper>
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
  
  .header-link{
    text-decoration:none;
    font-size:2.4rem;
    color:#333;
  font-weight:300;

}
 .header-icons{
   column-gap:1.4rem;
}
  
.icon{
  fill:#111;
  font-size:3rem;
}  
}
`