import React, { Component } from 'react';
import ReactPlayer from "react-player";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Embed YouTube video </h3>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
      />
      </div>
    );
  }
}

export default App;
