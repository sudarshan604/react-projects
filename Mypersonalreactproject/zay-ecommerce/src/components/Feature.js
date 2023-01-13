import { startTransition } from "react"
import styled from "styled-components"
import Star from "./Star"
import { FaSearch } from 'react-icons/fa'
import { useGlobalProductContext } from "../context/product_context"
import { Link } from "react-router-dom"
const Feature=()=>{

   const {feature_product:product}=useGlobalProductContext()

const  new_product=product.slice(0,3)

  return <Wrapper>
  <section className="container">
 
 

   
         <div className="header">
                <h4>Categories of The Month</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
             <div className="product-box">
              {new_product.map(item=>{
                 const {id,price,name,image,category,rating,description}=item

                 return <article key={id} className="bg-w flex">
                          <div className="figure">
                                  <img src={image} alt={name} />
                                  <Link to={`/products/${id}`} className="link">
                                        {<FaSearch/>}
                                   </Link>                       
                         </div>
                  
                      
                      <div className="pad">

                           <div className="flex star-div">
                               <span>{category}</span>
                             <span>{price}</span>
                           </div>
                         <div className="footer">
                             <h3>{name}</h3>
                             <p>{description.slice(0,(description.length/2))}</p>
                                                  
                         </div>

                    </div>
                 </article>


              })}
              
              </div> 
         </section>
  </Wrapper>
}


export default Feature



const Wrapper=styled.section`
    margin-top:10rem;
   background-color:#e9eef5 !important;
   .header{
    text-align:center;
  width:100%;
  font-size:4.8rem;
  h4{
  font-weight:200;
  margin-bottom:2rem; 
}
  p{ 
  margin:0 auto;
  max-width:50rem;
 font-size:1.8rem; 
}  
   }
.product-box{
   display:grid;
   grid-template-columns:repeat(3,1fr);
   column-gap:5rem;
   align-self:flex-start;
  margin-top:3rem;
  border-radius:5px;
   article{
    overflow:hidden;
    border-radius:1px solid #fff;
 border-radius:10px;
    flex-direction:column;
     row-gap:2rem;
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
        
    .pad{
   padding:0 1.5rem;
     border-top:1px solid #d2d6dd;
     .star-div{
      justify-content:space-between;
     font-size:2.5rem;
    }
    }
  
      }
.footer{
  font-weight:300;
    h3{
      font-size:2rem;
     margin-bottom:1rem;
    }
  p{
    font-size:1.4rem;
  }

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
      font-size: 2.5rem;
      color: #fff;
    }
  }
  .figure:Hover .link{
    opacity: 1;
}


}


`