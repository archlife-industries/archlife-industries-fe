import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container app">
          <div className="logoContainer">
            <img
              src={require("./public/Archlife-A-logo.png")}
              width="300"
              height="300"
              alt="Large A logo of Archlife"
              className="largeA"
            />
            <div className="colorfulLogo">
              <img
                src={require("./public/Archlife_color_logo.png")}
                width="320"
                alt="Colorful log of Archlife"
              />
            </div>
          </div>
        </div>
        {/* <Route
          path="/demo"
          render={props => <DrugForm {...props} addDrug={this.addDrug} />}
        /> */}
      </div>
    );
  }
}

export default App;
