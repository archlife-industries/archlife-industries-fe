import React from "react";
import on from "../../../assets/lighbulb/lightbub-on.png";
import off from "../../../assets/lighbulb/lightbub-off.png";

class Lightbulb extends React.Component {
  static defaultProps = {
    images: {on, off}
  };

  render() {
    return (
      <div>
        <img
          src={this.props.images[this.props.state]}
          alt={`light bulb is ${this.props.state}`}
        />
      </div>
    );
  }
}

export default Lightbulb;
