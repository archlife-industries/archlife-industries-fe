import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer footerContainer container">
      <div className="footerTop">
        <NavLink className="navLinks" to="/">
          HOME
        </NavLink>
        <NavLink className="navLinks" to="/">
          SOFTWARE
        </NavLink>
        <NavLink className="navLinks" to="/">
          DEMO
        </NavLink>
        <NavLink className="navLinks" to="/">
          ABOUT US
        </NavLink>
        <NavLink className="navLinks" to="/">
          INVEST
        </NavLink>
      </div>
      <div>
        <div className="footerBottom">
          <div className="footerCopyright">
            <p>
              <strong>Archlife Industries© 2020</strong>
            </p>
            <a href="mailto:info@archlife.org">
              <strong>info@Archlife.org</strong>
            </a>
          </div>
          <div className="footerLogo">
            <img
              src={require("../assets/Archlife-A-logo-new.png")}
              width="300"
              height="300"
              alt="Large A logo of Archlife"
              className="largeA"
            />
          </div>
          <div className="footerSocial">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
