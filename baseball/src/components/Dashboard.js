import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="action-buttons">
          <button onClick={() => this.props.handle.ball()}>Ball</button>
          <button onClick={() => this.props.handle.strike()}>Strike</button>
          <button onClick={() => this.props.handle.foul()}>Foul</button>
          <button onClick={() => this.props.handle.hit()}>Hit</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
