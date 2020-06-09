import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import RatioCounter from './RatioCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tools</h2>
        </div>
        <RatioCounter />
      </div>
    );
  }
}

export default App;
