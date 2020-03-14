import React, { Component } from "react";

import LightComponent from "./LightBulbSwitch/LightComponent";
import EEGButton from "./EEGButton/EEGButton";
import API from "../../utils/API";

class TrainingRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state:'off'
    }
  }
  
  handleStartRecording = (isTrue)=>{
    let duration = 1000
    if (isTrue){
      API()
        .get(`/${duration}`)
        .then(res =>{
          console.log('result is back', res.data)
          // 2, 3, 4, or 5.
          //           // Two Meaning — UP
          //           // Three meaning — DOWN
          //           // Four Meaning — LEFT
          //           // Five Meaning — RIGHT (edited)
        })
        .catch(error =>{
          console.log(`error ${error} has occurred`)
        })
    }
  }
  render() {
    return (
      <div className="container training">
        <LightComponent />
        <EEGButton startRecording={this.handleStartRecording}/>
      </div>
      
    );
  }
}

export default TrainingRoom;
