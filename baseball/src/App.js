import React from "react";

import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import MessageBoard from "./components/MessageBoard";

import "./style.css";

class App extends React.Component {
  state = { strike: 0, ball: 0, foul: 0, hit: 0, message: [] };

  handle = () => {
    return {
      strike: () => {
        this.state.strike + 1 === 3
          ? this.setState({
              ...this.state,
              ball: 0,
              strike: 0,
              message: [...this.state.message, "3 strikes! Resetted."]
            })
          : this.setState({
              ...this.state,
              strike: this.state.strike + 1,
              message: [...this.state.message, "Strike!"]
            });
      },

      ball: () => {
        this.state.ball + 1 === 4
          ? this.setState({
              ...this.state,
              ball: 0,
              strike: 0,
              message: [...this.state.message, "4 Balls! Resetted."]
            })
          : this.setState({
              ...this.state,
              ball: this.state.ball + 1,
              message: [...this.state.message, "Ball!"]
            });
      },

      foul: () => {
        this.state.strike < 2
          ? this.setState({
              ...this.state,
              strike: this.state.strike + 1,
              message: [...this.state.message, "Foul! +1 strike."]
            })
          : this.setState({
              ...this.state,
              message: [
                ...this.state.message,
                "Foul! Since there is 2 strikes, no effect."
              ]
            });
      },

      hit: () =>
        this.setState({
          ...this.state,
          ball: 0,
          strike: 0,
          message: [...this.state.message, "Hit! Resetted."]
        })
    };
  };

  render() {
    console.log(this.state.message);
    return (
      <div className="App">
        <Dashboard handle={this.handle} />
        <Display score={this.state} />
        <MessageBoard message={this.state.message} />
      </div>
    );
  }
}

export default App;
