import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoContainer from "./LogoContainer";
import Footer from "./Footer";

class LandingPage extends Component {
  render() {
    return (
      <div className="container landing ">
        <LogoContainer />
        <h1>
          Welcome to our proof-of-concept web app! We’ve built a basic,
          interactive web app that can be directly controlled by the user’s
          brain after they have paired an EEG-device to the app (currently only
          one specific EEG-device product will be supported because it’s a
          proof-of-concept).
        </h1>
        <Link to="/demo">Main Menu</Link>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
