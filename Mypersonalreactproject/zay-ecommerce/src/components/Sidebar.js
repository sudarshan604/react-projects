import React from 'react'
import { header } from "../utils/Helper";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalProductContext } from '../context/product_context';
function Sidebar() {
  const {isOpen,openSideBar}=useGlobalProductContext()
  return (
    <Wrapper >
    <section className={`${isOpen===true?"open":null}`}>

       {header.map((item)=>{
         
         return <li key={item.id}>
    <Link className="header-link" to={item.pagination}>{item.name}</Link>
</li>
})}
</section>

    </Wrapper>
  )
}

export default Sidebar


const Wrapper=styled.aside`
  section{
   position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:#fff;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: 1;
  }
.open{
  transform: translate(0%);

}
`

