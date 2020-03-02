import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <div className="scoreboard">
          <div className="label">BALLS</div>
          <div className="score">{this.props.score.ball || "0"}</div>
          <div className="score">{this.props.score.strike || "0"}</div>
          <div className="label">STRIKES</div>
        </div>
      </div>
    );
  }
}

export default Display;
