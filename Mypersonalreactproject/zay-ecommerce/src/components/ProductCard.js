import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
const ProductCard=({item})=>
  {
 
 
     const {id,image,name,price}=item
 
    return (
    <Wrapper>
 <div className='bg-w'>
        <figure className='figure'>
           <img className='img' src={image} alt={name}/>
           <Link to={`/products/${id}`} className="link">
               {<FaSearch/>}
                </Link> 
        </figure>
       <div className='desc-div flex'>
         <h3>{name}</h3>
         <p>Rs.{price}</p>
       </div>
    </div>
    </Wrapper>
  )
}

export default ProductCard

const Wrapper=styled.div`
   div{
  
    img{
      width:100%;
      height:25rem;
      object-fit:cover;
    } }
    .desc-div{
      justify-content:space-between;
         margin-top:.6rem;   
         color:#555;
         font-size:1.8rem;
         padding:0 .4rem; 
         padding-bottom:.4rem;

        p{
          color:orange;
        }
      }
      .figure{
          width:100%;
          height:25rem;
         transition:all 1s;
          position:relative;
          img{
            border-radius:10px;
            object-fit: fit;
            width:100%;
            height:100%;
          }
       :hover{
        cursor: pointer;
       }

        }
     .figure::after{
      content:'';
      background-color:#1a1a1a;
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      opacity:0;
      transition:all 1s;
    
    }
     
     .figure:Hover:after{
      opacity:.5;
    }


.link {
    z-index:12;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: all 1s;
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 4.5rem;
      color: #fff;
    }
  }
  .figure:Hover .link{
    opacity: 1;
}
`
