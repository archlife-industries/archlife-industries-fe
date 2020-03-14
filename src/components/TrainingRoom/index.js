import React, { Component } from "react";
import LightComponent from "./LightBulbSwitch/LightComponent";
import EEGButton from "./EEGButton/EEGButton";
import API from "../../utils/API";
import Thermostats from "./Thermostats/Thermostats";
import "./index.css";

class TrainingRoom extends Component {
  static defaultProps = {
    widgets: { left: LightComponent, right: Thermostats },
    directions: ["left", "right", "up", "down"],
    testing:false
  };
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      state: "off",
      selectedWidget: null,
      eegMessage: "Press to record your brainwave",
      direction: null
    };
  }

  eegRef = React.createRef();

  generateEegMessage = directions => {
    return directions.reduce((message, item, index) => {
      if (index === 0) {
        message += " " + item.toUpperCase();
      } else {
        message += " or " + item.toUpperCase();
      }
      return message;
    }, "Now think of a direction");
  };

  handleStartRecording = (isTrue) => {
    console.log("-----------handleStartRecording -----------");
    if (this.props.testing) {
      if (isTrue) {
        const result = new Promise(resolve => {
          let dir, index;
          index = Math.floor(Math.random() * this.props.directions.length);
          dir = this.props.directions[index];
          console.log(" this.state.directions", this.props.directions);

          setTimeout(() => {
            resolve({ dir });
          },300);
        }).then(res => {
          if (res.dir === "left" || res.dir === "right") {
            this.setState(() => ({
              selectedWidget: this.props.widgets[res.dir],
              direction: res.dir,
              eegMessage: "Press to record your brainwave"
            }));
          } else {
            this.setState(() => ({
              direction: res.dir,
              eegMessage: "Press to record your brainwave"
            }));
          }

          console.log("eegRef.ref", this.eegRef);
          this.eegRef.current.stopRecording();
        });
      } else {
        this.setState(() => ({
          recording: false,
          eegMessage: "Press to record your brainwave"
        }));
      }
    } else {
      if (isTrue) {
        API()
          .get(`/`)
          .then(res => {
            if (res.data === "left" || res.data === "right") {
              this.setState(() => ({
                selectedWidget: this.props.widgets[res.data],
                direction: res.data,
                eegMessage: "Press to record your brainwave"
              }));
            } else {
              this.setState(() => ({
                direction: res.data,
                eegMessage: "Press to record your brainwave"
              }));
            }

            console.log("eegRef.ref", this.eegRef);
            this.eegRef.current.stopRecording();
          })
          .catch(error => {
            console.log(`error ${error} has occurred`);
          });
      } else {
        this.setState(() => ({
          recording: false,
          eegMessage: "Press to record your brainwave"
        }));
      }
    }
  };
  render() {
    return (
      <div className="container training">
        <LightComponent
          selected={this.state.selectedWidget === LightComponent}
          dir={this.state.direction}
          setAllowableDirections={this.handleSetAllowableDirecitons}
        />
        <EEGButton
          startRecording={this.handleStartRecording}
          message={this.state.eegMessage}
          dir={this.state.direction}
          ref={this.eegRef}
        />
        <Thermostats
          selected={this.state.selectedWidget === Thermostats}
          dir={this.state.direction}
          setAllowableDirections={this.handleSetAllowableDirecitons}
        />
      </div>
    );
  }
}

export default TrainingRoom;
