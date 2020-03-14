import React from "react";
import on from "../../../assets/record_eeg_clicked.gif";
import off from "../../../assets/record_eeg_unclicked.png";
import "./EEGButton.css";

class EEGButton extends React.Component {
  static defaultProps = {
    images: { on, off }
  };
  
  constructor(props) {
    super(props)
    this.state = {
      state:'off'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    e.preventDefault()
    this.setState({state: this.state.state === 'off' ? 'on' : 'off'})
    if (this.state.state === 'off' ){
      this.props.startRecording(false)
    } else{
      this.props.startRecording(true)
    }
  }
  
  render() {
    return (
        <button onClick={this.handleClick}  className="eegButton" >
          <img
            src={this.props.images[this.state.state]}
            alt={`EEG Button is in ${this.props.state} state`}
            style={{width:"300px", background:"black"}}
          />
          
        </button>
    );
  }
}

export default EEGButton;
