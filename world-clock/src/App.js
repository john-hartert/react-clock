import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import PlaceName from './PlaceName.js';
import TimeDisplay from './TimeDisplay.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlaceName name="Atlanta" />
        <TimeDisplay time={new Date()} />
      </div>
    );
  }
}

export default App;





