import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = props => {
  return (
    <nav className="navigation sticky-top">
      <div className="container navContainer">
        <NavLink className="navLinks logo" to="/">
          ARCHLIFE INDUSTRIES
        </NavLink>
        <NavLink className="navLinks" to="/demo">
          MAIN MENU
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
