import React, { Component } from "react";

import LightComponent from "./LightBulbSwitch/LightComponent";
import EEGButton from "./EEGButton/EEGButton";
import API from "../../utils/API";
import Thermostats from "./Thermostats/Thermostats";
import "./index.css";
import on from "../../assets/lighbulb/lightbub-on.png";
import off from "../../assets/lighbulb/lightbub-off.png";


class TrainingRoom extends Component {
  static defaultProps = {
    widgets: {left: LightComponent, right:Thermostats},
    directions:['left','right','top','down']
  };
  constructor(props) {
    super(props)
    this.state = {
      recording:false,
      state:'off',
      selectedWidget:null,
      eegMessage:'Press to record your brainwave',
      direction:null,
      allowedDirections:['left']
    }
  }
  
  eegRef = React.createRef()
  
  generateEegMessage = ()=>{
   return this.props.directions.reduce((message, item, index) =>{
      if (index === 0){
         message += ' ' + item.toUpperCase()
      } else{
        message += ' or ' + item.toUpperCase()
      }
      return message
    },'Now think of a direction')
  }
  
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log("-----------shouldComponentUpdate -----------");
  //   console.log("nextState.allowedDirections",nextState.allowedDirections);
  //   console.log("this.state.allowedDirections",this.state.allowedDirections);
  //   console.log("this.state.allowedDirections === nextState.allowedDirections",this.state.allowedDirections === nextState.allowedDirections);
  //   if (this.state.allowedDirections !== nextState.allowedDirections) {
  //     return false
  //   }
  //   return true
  // }

  
  handleSetAllowableDirecitons = (directions)=>{
    console.log("-----------handleSetAllowableDirecitons -----------")
    console.log("directions",directions)
    // this.setState({allowedDirections: [...directions]})
  }
  
  handleStartRecording = (isTrue)=>{
    console.log("-----------handleStartRecording -----------")
    console.log("isTrue",isTrue)
    
    if (isTrue){
        this.setState(()=> ({
          recording:true,
          direction:'',
          eegMessage: this.generateEegMessage()
        }))
        
        const result = new Promise(resolve => {
          let dir, index
           
            index = Math.floor(Math.random() * this.props.directions.length)
            
            dir = this.props.directions[index]
            
            console.log(' this.state.directions', this.props.directions)
       
          setTimeout(()=>{
            resolve({dir})
          },)
        }).then(res => {
          if (res.dir === 'left' || res.dir ===  'right'){
            this.setState(()=> ({
              selectedWidget: this.props.widgets[res.dir],
              direction:res.dir,
              eegMessage:'Press to record your brainwave',
              // allowedDirections:['up','down']
            }))
          }else{
            this.setState(()=> ({
              direction:res.dir,
              eegMessage:'Press to record your brainwave',
              // allowedDirections:['up','down']
            }))
          }
        
          // if (res.dir === 'up' || res.dir ===  'down'){
          //   if (!this.state.selectedWidget){
          //     this.setState(()=> ({
          //       eegMessage:'You are not ready to turn on',
          //       // allowedDirections:['up','down']
          //     }))
          //   }else{
          //     this.setState(()=> ({
          //       direction:res.dir,
          //       eegMessage:'Press to record your brainwave',
          //       // allowedDirections:['up','down']
          //     }))
          //   }
          // }
         
          console.log("eegRef.ref",  this.eegRef)
          this.eegRef.current.stopRecording()
        })
      // API()
      //   .get(`/`)
      //   .then(res =>{
      //     console.log('result is back', res.data)
      //     // 2, 3, 4, or 5.
      //     //           // Two Meaning — UP
      //     //           // Three meaning — DOWN
      //     //           // Four Meaning — LEFT
      //     //           // Five Meaning — RIGHT (edited)
      //     this.setState(()=> ({
      //       selectedWidget: this.widgets[res.data.payload],
      //       direction:res.data.payload,
      //       eegMessage:'Left',
      //     }))
      //   })
      //   .catch(error =>{
      //     console.log(`error ${error} has occurred`)
      //   })
    }else{
      this.setState(()=> ({
        recording:false,
        eegMessage:'Press to record your brainwave',
      }))
    }
  }
  render() {
    return (
      <div className="container training">
        <LightComponent selected={this.state.selectedWidget === LightComponent}  dir={this.state.direction}  setAllowableDirections={this.handleSetAllowableDirecitons}/>
        <EEGButton startRecording={this.handleStartRecording} message={this.state.eegMessage} dir={this.state.direction} ref={this.eegRef}/>
        <Thermostats selected={this.state.selectedWidget === Thermostats}  dir={this.state.direction} setAllowableDirections={this.handleSetAllowableDirecitons}/>
      </div>
    );
  }
}

export default TrainingRoom;
