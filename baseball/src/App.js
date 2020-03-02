import React from "react";

import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import MessageBoard from "./components/MessageBoard";

import "./style.css";

export const addStrike = strike =>
  strike + 1 === 3 ? { ball: 0, strike: 0 } : { strike: strike + 1 };

export const addBall = ball =>
  ball + 1 === 4 ? { ball: 0, strike: 0 } : { ball: ball + 1 };

export const addFoul = strike =>
  strike < 2 ? { strike: strike + 1 } : { strike: 2 };

export const addHit = () => ({ ball: 0, strike: 0 });

class App extends React.Component {
  state = { strike: 0, ball: 0, foul: 0, hit: 0, message: [] };

  onStrikeButton = () =>
    this.setState({
      ...this.state,
      ...addStrike(this.state.strike),
      message: [...this.state.message, "Strike!"]
    });

  onBallButton = () =>
    this.setState({
      ...this.state,
      ...addBall(this.state.ball),
      message: [...this.state.message, "Ball!"]
    });

  onFoulButton = () =>
    this.setState({
      ...this.state,
      ...addFoul(this.state.strike),
      message: [...this.state.message, "Foul!"]
    });

  onHitButton = () =>
    this.setState({
      ...this.state,
      ...addHit(),
      message: [...this.state.message, "Hit!"]
    });

  render() {
    console.log(this.state.message);
    return (
      <div className="App">
        <Dashboard
          handle={{
            strike: this.onStrikeButton,
            ball: this.onBallButton,
            foul: this.onFoulButton,
            hit: this.onHitButton
          }}
        />
        <Display score={this.state} />
        <MessageBoard message={this.state.message} />
      </div>
    );
  }
}

export default App;
