import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer footerContainer container">
      <div className="footerTop">
        <NavLink className="footerLinks" to="/">
          HOME
        </NavLink>
        <NavLink className="footerLinks" to="/">
          SOFTWARE
        </NavLink>
        <NavLink className="footerLinks" to="/">
          DEMO
        </NavLink>
        <NavLink className="footerLinks" to="/">
          ABOUT US
        </NavLink>
        <NavLink className="footerLinks" to="/">
          INVEST
        </NavLink>
      </div>
      <hr className="footerLine" />
      <div>
        <div className="footerBottom">
          <div className="footerCopyright">
            <p>
              <strong>Archlife Industries© 2020</strong>
            </p>
            <a href="mailto:info@archlife.org" className="copyrightEmail">
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
            <div>
              <img
                src={require("../assets/Social_Icons/twitter.png")}
                width="40"
                height="40"
              />
            </div>
            <div>
              <img
                src={require("../assets/Social_Icons/github.png")}
                width="40"
                height="40"
              />
            </div>
            <div>
              <img
                src={require("../assets/Social_Icons/linkedin.png")}
                width="40"
                height="40"
              />
            </div>
            <div>
              <img
                src={require("../assets/Social_Icons/youtube.png")}
                width="40"
                height="40"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
