import { useGlobalCategoryContext } from "../context/category_context"
import { ProductList,FilterCategory } from "../components"
import styled from "styled-components"
const Product=()=>{
 
 const {All_Products:products,category}=useGlobalCategoryContext()
  

  return <Wrapper>
       <FilterCategory category={category}/>
        <ProductList products={products}/>
</Wrapper>
}


export default Product


const Wrapper=styled.div`
  margin-top:3rem;
     display:grid;
      grid-template-columns:20% 80%;
  padding:0 7vw;
`