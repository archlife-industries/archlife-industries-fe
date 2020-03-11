import React from 'react'
import on from '../../assets/lighbulb/lightbub-on.png'
import off from '../../assets/lighbulb/lightbub-off.png'
import Lightbulb from "./Lightbulb";
import LightSwitch from "./LightSwitch";

class LightComponent extends React.Component{
  static defaultProps = {
  }
  constructor(props) {
    super(props)
    this.state = {
      state:'off'
    }
    this.handleTurnOn = this.handleTurnOn.bind(this)
    this.handleTurnOff = this.handleTurnOff.bind(this)
  }
  handleTurnOn(){
    this.setState({
      state:'on'
    })
  }
  handleTurnOff(){
    this.setState({
      state:'off'
    })
  }
  
  render(){
    return(
      <div style={{textAlign:"center"}}>
        <Lightbulb state={this.state.state}/>
        <LightSwitch turnOn={this.handleTurnOn} turnOff={this.handleTurnOff}/>
      </div>
    )
  }
}

export default LightComponent
