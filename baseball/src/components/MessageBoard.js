import React from "react";

class MessageBoard extends React.Component {
  render() {
    return (
      <div className="message-board">
        {this.props.message.length > 0 ? (
          <>
            <h3>{this.props.message[this.props.message.length - 1]}</h3>
            <div className="message-history">
              {[...this.props.message]
                .reverse()
                .map((message, index) =>
                  index === 0 ? null : <p key={index}>{message}</p>
                )}
            </div>
          </>
        ) : (
          <p>Game will start soon!</p>
        )}
      </div>
    );
  }
}

export default MessageBoard;
