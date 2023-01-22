import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useGlobalCategoryContext } from "../context/category_context";
function ProductList({ products }) {
 const {updateSort}=useGlobalCategoryContext()
 
   return (
    <Wrapper>
      <div className="filter">
        <p>{products.length} Products Found`</p>
        <p className="line"></p>
        <div>
          <span className="sort">Sort By</span>
          <select
            name="sort"
            id="sort"
            onChange={updateSort}
            className="sort-input"
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a-z)</option>
            <option value="name-z">name (z-a)</option>
          </select>
        </div>
      </div>
      <div className="list">
        {products.map((item, index) => {
          return <ProductCard key={index} item={item} />;
        })}
      </div>
    </Wrapper>
  );
}

export default ProductList;

const Wrapper = styled.div`
  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    p {
      font-size: 1.8rem;
    }
    .line {
      border: 1px solid #666;
      align-self: center;
      width: 50%;
      opacity: 0.4;
    }
    .sort {
      font-size: 1.8rem;
    }
    select {
      font-weight: 500;
      border: 1px solid #222;
      padding: 0.4rem 0.6rem;
      border-radius: 4px;
    }
  }
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
    row-gap: 2.5rem;
  }
`;
