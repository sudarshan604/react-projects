import { useGlobalCategoryContext } from "../context/category_context"
import { ProductList,FilterCategory } from "../components"
import styled from "styled-components"
const Product=()=>{
 
 const {All_Products:product}=useGlobalCategoryContext()
  

  return <Wrapper>
       <FilterCategory/>
        <ProductList/>
</Wrapper>
}


export default Product


const Wrapper=styled.div`
  margin-top:3rem;
     display:grid;
      grid-template-columns:20% 80%;
  padding:0 7vw;
`