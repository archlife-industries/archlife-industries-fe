import React from "react";
import { NavLink } from "react-router-dom";

const Footer = props => {
  return (
    <footer className="footer footerContainer">
      <div className="footerTop">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/">SOFTWARE</NavLink>
        <NavLink to="/">DEMO</NavLink>
        <NavLink to="/">ABOUT US</NavLink>
        <NavLink to="/">INVEST</NavLink>
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
