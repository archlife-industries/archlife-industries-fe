import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = props => {
  return (
    <footer className="footer footerContainer container">
      <div className="footerTop">
        <a href="https://archlife.org/" className="footerLinks">
          HOME
        </a>
        <a href="https://archlife.org/archlife/" className="footerLinks">
          SOFTWARE
        </a>
        <a href="https://archlife.org/archlife/demo/" className="footerLinks">
          DEMO
        </a>
        <a href="https://archlife.org/about-us/" className="footerLinks">
          ABOUT US
        </a>
        <a href="https://archlife.org/invest/" className="footerLinks">
          INVEST
        </a>
      </div>
      <hr className="footerLine" />
      <div>
        <div className="footerBottom">
          <div className="footerCopyright">
            <p>
              <strong>Archlife Industries© 2020</strong>
            </p>
            <div>
              <a href="mailto:info@archlife.org" className="copyrightEmail">
                <strong>info@Archlife.org</strong>
              </a>
            </div>
          </div>
          <div className="footerLogo">
            <img
              src={require("../assets/Archlife-A-logo-new.png")}
              width="110"
              height="110"
              alt="Large A logo of Archlife"
              className="largeA"
            />
          </div>
          <div className="footerSocial">
            <div>
              <a href="https://www.twitter.com/archlife3/">
                <img
                  src={require("../assets/Social_Icons/twitter.png")}
                  width="40"
                  height="40"
                  alt="social media icon"
                />
              </a>
            </div>
            <div>
              <a href="https://github.com/archlife-industries/">
                <img
                  src={require("../assets/Social_Icons/github.png")}
                  width="40"
                  height="40"
                  alt="social media icon"
                />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/organization-guest/company/archlife-industries?challengeId=AQHLTOlJevuPfQAAAW9zG1_Vst-Avch9x0dPRtj_UMsRdL_YoIBgEXLCrmP8CG3-LmDsJfKq8efe_0PwMsdcwYGzqvw-qmZVbg&submissionId=45ffbe6a-24d6-e615-0657-105022afa23f">
                <img
                  src={require("../assets/Social_Icons/linkedin.png")}
                  width="40"
                  height="40"
                  alt="social media icon"
                />
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UCOHXyEqUG4ncPt1WPMzpm4Q/?guided_help_flow=5">
                <img
                  src={require("../assets/Social_Icons/youtube.png")}
                  width="40"
                  height="40"
                  alt="social media icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
