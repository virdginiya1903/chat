import React, { Component, Fragment } from 'react';
import Title from './Title';
import Chat from './components/Chat/Chat';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title />
        <Chat />
      </Fragment>
    );
  }
}

export default App;
