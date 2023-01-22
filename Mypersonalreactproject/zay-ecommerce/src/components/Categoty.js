import { useEffect } from "react"
import styled from "styled-components"
import { useGlobalProductContext } from "../context/product_context"
import { Link } from "react-router-dom"

const Category=()=>{

const {category_product:products,isLoading}=useGlobalProductContext()


const newProduct=products.slice(6,9)
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
                 <button>
                  <Link style={{textDecoration:"none",color:"#fff"}} to="/products">
                  GO shop
                  </Link>
                  </button>
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
 margin-bottom:2rem; 
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
  margin-top:4rem;
    display:flex;
  align-items:center;
  justify-content:center;
   img{
      background-color:#ffffff;
      border:2px solid #fff;
     width:85%;
     height:85;
     object-fit:contain;
   border-radius:50%;
   /* transform:rotateX(70deg)  */
  }
  }
div{
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 row-gap:2rem;
 h3{
    font-size:3rem;
    text-align:center;
  }
 button{
  background-color:#33ff33;
  border:none;
  color:#fff;
  padding:1rem 2rem;
  border-radius:3px;
  :hover{
    cursor: pointer;
  }
}
}


}



`