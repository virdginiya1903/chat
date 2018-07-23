import React, { Component, Fragment } from 'react';
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    const { text, date } = this.props;

    return (
      <Fragment>
        <span className="message">{text}</span>
        <span className="date">{date}</span>
      </Fragment>
    );
  }
}

export default Message;
