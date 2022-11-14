import { Link, Outlet } from "react-router-dom";
import StyleNavBar from "./StyleNavbar";

const SharedProduct = () => {
  return (
    <>
      <StyleNavBar />
      <Outlet />
    </>
  );
};
export default SharedProduct;
