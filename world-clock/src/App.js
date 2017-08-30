import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import PlaceName from './PlaceName';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlaceName name="Atlanta" />
      </div>
    );
  }
}

export default App;





