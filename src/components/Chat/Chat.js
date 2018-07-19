import React, { Component } from 'react';
import Message from '../Message/Message';

class Chat extends Component {
  state = {
    messages: [''],
    massegeInput: ''
  };
  render() {
    return (
      <div className="chat">
        <input type="text" className="input-message" />
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, key) => (
              <Message key={key} text={message.text} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
