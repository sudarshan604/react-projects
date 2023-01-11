import { useEffect } from "react"
import styled from "styled-components"
import { useGlobalProductContext } from "../context/product_context"
const Category=()=>{

const {category_product:products,isLoading}=useGlobalProductContext()


const newProduct=products.slice(0,3)
console.log(newProduct)
  return <Wrapper className="container">
              <div className="header">
                <h4>Categories of The Month</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
     <section className="category-item">
           {newProduct.map(item=>{
       const {id,category,description,image,price,rating,title}=item


       return <div key={id}>
                  <figure className="img-box">
                    <img className="category-img" src={image} alt={title} />
                  </figure>
             <div>
                  <h3>{category}</h3>  
                 <button>GO shop</button>
             </div>
        
       </div>

           })}   
       
     </section>
  </Wrapper>


}










export default Category


const Wrapper=styled.section`
  div{
    text-align:center;
  width:100%;
  font-size:4.8rem;
  h4{
  font-weight:200;
 }
  p{ 
  margin:0 auto;
  max-width:50rem;
 font-size:1.8rem; 
}  

}
.category-item{
   display:grid;
   grid-template-columns:repeat(3,1fr);
  column-gap:3rem;
  figure{ 
   width:60%;
 height:60%;
 display:flex;
 padding:1rem;
 align-items:center;
   border-radius:50%;
    border:4px solid red;
    img{
   width:100%;
   height:auto;
   transform:rotateX(70deg) 
  }
  }
div{
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;

  h3{
    font-size:3rem;
    text-align:center;
  }
 button{
  background-color:green;
  border:none;
  color:#fff;
  padding:1rem 2rem;
 }
}


}



`