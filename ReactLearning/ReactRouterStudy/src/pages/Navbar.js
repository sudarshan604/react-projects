import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">product</Link>
    </nav>
  );
};

export default NavBar;
