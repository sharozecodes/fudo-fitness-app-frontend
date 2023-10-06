import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink exact to="/login" activeClassName="active">
        Login
      </NavLink>
      <NavLink exact to="/signup" activeClassName="active">
        Signup
      </NavLink>
    </div>
  );
}

export default NavBar;
