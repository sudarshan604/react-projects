import product from "../data.js";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <>
      <section className="section"></section>
      {product.map((product) => {
        return (
          <article key={product.id}>
            <h5>{product.name}</h5>
            <Link to={`/product/${product.id}`}>more info</Link>
          </article>
        );
      })}
    </>
  );
};

export default Products;
