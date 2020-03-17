import React, { Component } from "react";
import LightComponent from "./LightBulbSwitch/LightComponent";
import EEGButton from "./EEGButton/EEGButton";
import API from "../../utils/API";
import Thermostat from "./Thermostat/Thermostat";
import "./index.css";

class TrainingRoom extends Component {
  static defaultProps = {
    widgets: { left: LightComponent, right: Thermostat },
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
      direction: null,
      allowedDirections:['left','right']
    };
  }

  eegRef = React.createRef();

  generateDirecitonMessage = directions => {
    return this.state.allowedDirections.reduce((message, item, index) => {
      if (index === 0) {
        message += " " + item.toUpperCase();
      } else {
        message += " | " + item.toUpperCase();
      }
      return message;
    },'');
  };
  
  handleSetAllowableDirections = (arr)=>{
    this.setState({allowedDirections:[...arr]})
  }

  handleStartRecording = (isTrue) => {
    if (this.props.testing) {
      if (isTrue) {
        const result = new Promise(resolve => {
          let dir, index;
          index = Math.floor(Math.random() * this.state.allowedDirections.length);
          dir = this.state.allowedDirections[index];
          console.log(" this.state.directions", this.state.allowedDirections);
          
          setTimeout(() => {
            resolve({ dir });
          },1000);
        }).then(res => {
          if (res.dir === "left" || res.dir === "right") {
            this.setState(() => ({
              selectedWidget: this.props.widgets[res.dir],
              direction: res.dir,
              eegMessage: "Press to record your brainwave and think",
              dirMessage: this.generateDirecitonMessage()
             
            }));
          } else {
            this.setState(() => ({
              direction: res.dir,
              eegMessage: "Press to record your brainwave and think",
              dirMessage: this.generateDirecitonMessage()
            }));
          }

          console.log("eegRef.ref", this.eegRef);
         this.eegRef.current.stopRecording();
        });
      } else {
        this.setState(() => ({
          recording: false,
          eegMessage: "Press to record your brainwave and think",
          dirMessage: this.generateDirecitonMessage()
        }));
      }
    } else {
      if (isTrue) {
        API()
          .get(`/`)
          .then(res => {
            if (res.data === "left" || res.data === "right") {
              this.setState(() => ({
                selectedWidget: this.props.widgets[res.dir],
                direction: res.data,
                eegMessage: "Press to record your brainwave and think",
                dirMessage: this.generateDirecitonMessage()
      
              }));
            } else {
              this.setState(() => ({
                direction: res.data,
                eegMessage: "Press to record your brainwave and think",
                dirMessage: this.generateDirecitonMessage()
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
          eegMessage: "Press to record your brainwave and think",
          dirMessage: this.generateDirecitonMessage()
        }));
      }
    }
  };
  render() {
    return (
      <div className="training-container">
        <LightComponent
          selected={this.state.selectedWidget === LightComponent}
          dir={this.state.direction}
          setAllowableDirections={this.handleSetAllowableDirections}
        />
        <EEGButton
          startRecording={this.handleStartRecording}
          message={this.state.eegMessage}
          dir={this.state.direction}
          dirMessage={this.state.dirMessage}
          ref={this.eegRef}
        />
        <Thermostat
          selected={this.state.selectedWidget === Thermostat}
          dir={this.state.direction}
          setAllowableDirections={this.handleSetAllowableDirections}
        />
      </div>
    );
  }
}

export default TrainingRoom;
