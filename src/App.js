import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Route
          path="/demo"
          render={props => <DrugForm {...props} addDrug={this.addDrug} />}
        /> */}
      </div>
    );
  }
}

export default App;
