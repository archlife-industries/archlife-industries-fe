import React from "react";

import "./LogoContainer.css";

const LogoContainer = props => {
  return (
    <div className="logoContainer">
      <img
        src={require("../assets/Archlife-A-logo-new.png")}
        width="300"
        height="300"
        alt="Large A logo of Archlife"
        className="largeA"
      />
      <div className="colorfulLogo">
        <img
          src={require("../assets/Archlife_color_logo.png")}
          width="320"
          alt="Colorful log of Archlife"
        />
      </div>
    </div>
  );
};

export default LogoContainer;
