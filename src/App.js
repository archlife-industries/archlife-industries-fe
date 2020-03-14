import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import LogoContainer from "./components/LogoContainer";
import LoginContainer from "./components/LoginContainer";
import TrainingRoom from "./components/TrainingRoom";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render={props => <LandingPage {...props} />} />

        <Route path="/demo" render={props => <TrainingRoom {...props} />} />
        <Footer />
      </div>
    );
  }
}

export default App;
