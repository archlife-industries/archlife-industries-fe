import React, { Component } from "react";

import Footer from "./Footer";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="container landing ">
          <h1>ARCHLIFE BETA INSTRUCTIONS</h1>
          <h2>WELCOME TO OUR BRAIN-CONTROLLED PROOF OF CONCEPT WEB APP!</h2>

          <h3>
            Please make sure your OpenBCI devide is connected to your computer
            via bluetooth.
            <br /> Currently, only specific EEG device is support because this
            is a proof-of-concept
          </h3>

          <h3 classname="opc">
            After clicking the "record brainwave" button, you must think of one
            of the following <br /> four commands in order to adjust a
            thermostat and to turn a switch on or off.
          </h3>
          <div className="arrows">
            <img
              src={require("../assets/arrow-icons/up_arrow.png")}
              width="150"
              height="150"
              alt="up arrow"
            />
            <img
              src={require("../assets/arrow-icons/left_arrow.png")}
              width="150"
              height="150"
              alt="left arrow"
            />
            <img
              src={require("../assets/arrow-icons/down_arrow.png")}
              width="150"
              height="150"
              alt="down arrow"
            />
            <img
              src={require("../assets/arrow-icons/right_arrow.png")}
              width="150"
              height="150"
              alt="right arrow"
            />
            <img
              src={require("../assets/record_eeg_unclicked.png")}
              width="150"
              height="150"
              alt="eeg record button"
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default LandingPage;
