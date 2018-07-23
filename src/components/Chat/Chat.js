import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: '',
    date: [],
    key: []
  };
  handleOnChange = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    let date = new Date();
    let index = Math.random();

    if (event.key === 'Enter' && this.state.messageInput !== '') {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            text: this.state.messageInput,
            date: date.toLocaleTimeString(),
            key: index
          }
        ]
      });
      this.setState({ messageInput: '' });
    }
  };

  render() {
    return (
      <div className="chat">
        <input
          type="text"
          placeholder="Введите текст... "
          className="input-message "
          onChange={this.handleOnChange}
          onKeyPress={this.sendMessageOnEnter}
          value={this.state.messageInput}
        />
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => (
              <Message key={index} text={message.text} date={message.date} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
