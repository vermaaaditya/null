import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav style={{ padding: "10px", background: "#f2f2f2" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          marginRight: "15px",
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          marginRight: "15px",
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
        })}
      >
        Contact
      </NavLink>
     
    </nav>
  );
}

export default Header;
