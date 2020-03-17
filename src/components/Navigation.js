import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = props => {
  return (
    <nav className="navigation sticky-top">
      <div className="container navContainer">
        <NavLink className="logo padT" to="/">
          <img
            src={require("../assets/Archlife_color_logo.png")}
            height="40"
            alt="Color logo of Archlife"
          />
        </NavLink>
        <NavLink className="footerLinks padT" to="/demo">
          MAIN MENU
        </NavLink>
        <NavLink className="footerLinks padT" to="/login">
          LOGIN
        </NavLink>
        <NavLink className="footerLinks padT" to="/register">
          REGISTER
        </NavLink>
      </div>
      <div>
        <img
          src={require("../assets/nav_border.png")}
          alt="navigation Border"
          className="navFooterBorder"
        />
      </div>
    </nav>
  );
};

export default Navigation;
