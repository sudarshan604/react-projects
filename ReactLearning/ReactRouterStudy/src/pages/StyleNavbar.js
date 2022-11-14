import { NavLink } from "react-router-dom";

const StyleNavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? "red" : "green" };
        }}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink to="/product">product</NavLink>
    </nav>
  );
};

export default StyleNavBar;
