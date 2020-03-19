import React from "react";
import on from "../../../assets/record_eeg_clicked.gif";
import off from "../../../assets/record_eeg_unclicked.png";
import "./EEGButton.css";

class EEGButton extends React.Component {
  static defaultProps = {
    images: { on, off }
  };

  constructor(props) {
    super(props);
    this.state = {
      state: "off"
    };
    this.handleClick = this.handleClick.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
  }

  stopRecording() {
    this.setState({
      state: "off"
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.startRecording(this.state.state === "off");
    this.setState({ state: this.state.state === "off" ? "on" : "off" });
  }

  render() {
    return (
      <div className="eggButtonContainer">
        <button onClick={this.handleClick} className="eegButton">
          <img
            src={this.props.images[this.state.state]}
            alt={`EEG Button is in ${this.props.state} state`}
            style={{ width: "300px", background: "black" }}
          />
        </button>
        <h1 className="instruction">{this.props.message}</h1>
        <h1 className="dirMessage">{this.props.dirMessage}</h1>
        <h1 className={`selectedMessage ${this.props.dir && "show"}`}>You Selected <span>{this.props.dir && this.props.dir.toUpperCase()}</span></h1>
      </div>
    );
  }
}

export default EEGButton;
