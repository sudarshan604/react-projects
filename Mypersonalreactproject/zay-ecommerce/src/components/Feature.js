import { startTransition } from "react"
import styled from "styled-components"
import Star from "./Star"
import { useGlobalProductContext } from "../context/product_context"

const Feature=()=>{

   const {feature_product:product}=useGlobalProductContext()

console.log(product)

  return <Wrapper>
  <section className="container">
   
         <div className="header">
                <h4>Categories of The Month</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
             <div className="product-box">
              {product.map(item=>{
                 const {id,price,title,image,rating,description}=item

                 return <article key={id}>
                          <figure>

                          </figure>
                       <div>
                           <div>
                               
                           </div>
                         <div>
                            {<Star star={rating.rate} price={price}/>}
                             <span></span>
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

`