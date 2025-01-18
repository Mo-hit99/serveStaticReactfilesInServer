import { NavLink } from "react-router";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">ContactUS</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;