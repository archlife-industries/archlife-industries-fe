import React from "react";
import panel from "../../../assets/thermostat/thermostats.png";
import "./Thermostats.css";

class Thermostats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 60
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("-----------componentWillReceiveProps -----------");
    if (nextProps.selected) {
      if (nextProps.dir === "up") {
        this.handleUp();
      } else {
        if (nextProps.dir === "down") {
          this.handleDown();
        }
      }
    }
  }
  handleUp() {
    if (this.state.temperature >= 80) {
      return;
    }
    this.setState(state => ({
      temperature: state.temperature + 1
    }));
  }
  handleDown() {
    if (this.state.temperature <= 60) {
      return;
    }
    this.setState(state => ({
      temperature: state.temperature - 1
    }));
  }

  render() {
    return (
      <div
        className={`thermostat-container ${this.props.selected && "selected"}`}
      >
        <h1 className={`tag ${this.props.selected=== "on" && "on"}`}>
          THERMOSTAT
        </h1>
        <div className="thermostat">
          <img
            src={panel}
            style={{ width: "290px" }}
            alt={`Thermostats is ${this.props.state}`}
          />
          <h1 className="temperature">{this.state.temperature}</h1>
          <button className="up" onClick={this.handleUp}></button>
          <button className="down" onClick={this.handleDown}></button>
        </div>
      </div>
    );
  }
}

export default Thermostats;
