import "./Nav.css";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <CartWidget/>
        <NavLink activeClassName="active" to="/" className="Link">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about" className="Link">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/contact" className="Link">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;