import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: '',
    date: []
  };
  handleOnChange = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    let date = new Date();

    if (event.key === 'Enter' && this.state.messageInput !== '') {
      this.setState({
        messages: [
          ...this.state.messages,
          { text: this.state.messageInput, date: date.toLocaleTimeString() }
        ]
      });
      this.setState({ messageInput: '' });
      // this.setState({
      //   date2: new Date()
      // });
      // this.setState({ date: [...this.state.date, {}] });
    }
  };
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }

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
              <Message
                key={Math.random()}
                text={message.text}
                date={message.date}
                // date={this.state.date2}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
