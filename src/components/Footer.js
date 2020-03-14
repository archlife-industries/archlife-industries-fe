import React from "react";
import { NavLink } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="footer footerContainer">
      <div className="footerNav">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/">SOFTWARE</NavLink>
        <NavLink to="/">DEMO</NavLink>
        <NavLink to="/">ABOUT US</NavLink>
        <NavLink to="/">INVEST</NavLink>
      </div>
      <div>
        <div>
          <p>
            <strong>Archlife Industries© 2020</strong>
          </p>
          <a href="mailto:info@archlife.org">
            <strong>info@Archlife.org</strong>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
