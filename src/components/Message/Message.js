import React, { Component } from 'react';

class Message extends Component {
  state = {};
  render() {
    const text = this.props;
    return <span className="message">{text}</span>;
  }
}

export default Message;
