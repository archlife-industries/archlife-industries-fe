import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = props => {
  return (
    <nav className="navigation">
      <NavLink className="navLinks logo" to="/">
        Archlife Industries
      </NavLink>
      <NavLink className="navLinks" to="/demo">
        Demo
      </NavLink>
    </nav>
  );
};

export default Navigation;