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
      <NavLink to="/login">login</NavLink>
      <NavLink to="/dashboard">dashboard</NavLink>
    </nav>
  );
};

export default StyleNavBar;
