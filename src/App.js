import React, { Component } from 'react';
import Title from './Title';
import Chat from './components/Chat/Chat';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Chat />
      </div>
    );
  }
}

export default App;
