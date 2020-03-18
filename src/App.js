import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import TrainingRoom from "./components/TrainingRoom";
import LandingPage from "./components/LandingPage";
import Login from "./components/authentication/Login/Login";
import Register from "./components/authentication/Register/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Route exact path="/" render={props => <LandingPage {...props} />} />
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route
          path="/demo"
          render={props => <TrainingRoom {...props} testing={true} />}
        />
      </div>
    );
  }
}

export default App;
