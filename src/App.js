import React, { Component } from "react";
import "./App.css";
import {Route } from 'react-router-dom'
import Navigation from "./components/Navigation";
import TrainingRoom from "./components/TrainingRoom";
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => <LandingPage {...props}/>}
        />
        
        <Route
          path="/demo"
          render={props => <TrainingRoom {...props} testing={true}/>}
        />
      </div>
    );
  }
}

export default App;
