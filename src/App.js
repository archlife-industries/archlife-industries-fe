import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import LogoContainer from "./components/LogoContainer";
import LoginContainer from "./components/LoginContainer";
import LightComponent from "./components/LightBulbSwitch/LightComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container app">
          <LogoContainer />
          <LoginContainer />
          <LightComponent />
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
