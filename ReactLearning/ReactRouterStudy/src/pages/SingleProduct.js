import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  console.log(productId);

  const dat = products.find((c) => c.id === productId);
  const { name, image } = dat;

  return (
    <>
      <h4>{name}</h4>
      <img src={image} alt="randomimage" />
      <Link to="/product">back to product</Link>
    </>
  );
};
export default SingleProduct;
