import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const element = <h1>Time to tell some time</h1>
React.DOM.render(
  element,
  document.getElementById('root')
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TIME</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
