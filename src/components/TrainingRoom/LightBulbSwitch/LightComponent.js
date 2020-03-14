import React from "react";
import on from "../../../assets/lighbulb/lightbub-on.png";
import off from "../../../assets/lighbulb/lightbub-off.png";
import Lightbulb from "./Lightbulb";
import LightSwitch from "./LightSwitch";
import "./LightBulbSwitch.css";

class LightComponent extends React.Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      state: "off",
      allowedDirections: ["up", "down"]
    };
    this.handleTurnOn = this.handleTurnOn.bind(this);
    this.handleTurnOff = this.handleTurnOff.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log("-----------componentWillReceiveProps -----------");
    console.log("nextProps", nextProps);
    console.log("this.props.dir", this.props.dir);
    if (nextProps.selected) {
      if (this.state.state === 'off'){
        this.props.setAllowableDirections(["up" ]);
      }else{
        this.props.setAllowableDirections(["down" ]);
      }
      if (nextProps.dir === "up") {
        this.handleTurnOn();
      } else {
        if (nextProps.dir === "down") {
          this.handleTurnOff();
        }
      }
    }
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (nextProps.selected) {
  //     return false;
  //   }
  //   return true;
  // }

  handleTurnOn() {
    this.setState({
      state: "on"
    });
    console.log("turn on");
  }
  handleTurnOff() {
    this.setState({
      state: "off"
    });
    console.log("turn off");
  }

  render() {
    return (
      <div className={`light-container ${this.props.selected && "selected"}`}>
        <Lightbulb state={this.state.state} />
        <LightSwitch
          turnOn={this.handleTurnOn}
          turnOff={this.handleTurnOff}
          state={this.state.state}
        />
      </div>
    );
  }
}

export default LightComponent;
