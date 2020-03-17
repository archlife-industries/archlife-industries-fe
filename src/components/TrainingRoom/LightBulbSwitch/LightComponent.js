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
    };
    this.handleTurnOn = this.handleTurnOn.bind(this);
    this.handleTurnOff = this.handleTurnOff.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log("-----------componentWillReceiveProps -----------");
    if (nextProps.selected) {
      if (nextProps.dir === "up") {
        this.handleTurnOn();
      } else {
        if (nextProps.dir === "down") {
          this.handleTurnOff();
        }
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.selected !== this.props.selected) && this.props.selected) {
        this.props.setAllowableDirections([ "right", "left", "up", "down"]);
    }
  }
  handleTurnOn() {
    this.setState({
      state: "on"
    });
  }
  handleTurnOff() {
    this.setState({
      state: "off"
    });
  }

  render() {
    return (
      <div className={`light-container ${this.props.selected && "selected"}`}>
        <h1 className={`tag ${this.props.selected  && "on"}`}>LIGHT SWITCH</h1>
        <p className={`direction up ${this.props.selected && "show"}`}>UP</p>
        <Lightbulb state={this.state.state} />
        <LightSwitch
          turnOn={this.handleTurnOn}
          turnOff={this.handleTurnOff}
          state={this.state.state}
        />
  
        <p className={`direction ${this.props.selected && "show"}`}>DOWN</p>
      </div>
    );
  }
}

export default LightComponent;
