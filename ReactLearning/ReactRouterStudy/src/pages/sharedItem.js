import { Outlet } from "react-router-dom";

const SharedItem = () => {
  return (
    <>
      <h2>Product</h2>
      <Outlet />
    </>
  );
};
export default SharedItem;
