import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './Clock.js';

const cities = {
  Atlanta: new Date(),
  'New York': new Date(),
  Tokyo: new Date(),
  Manilla: new Date(),
  'Mexico City': new Date(),
  Toronto: new Date(),
}

class App extends Component {
  render() {

    const myClocks = Object.keys(cities).map( (city, idx) => <Clock name={city} time={cities[city]} key={idx}/>)

    return (
      <div className="App">
        {/* <Clock name="Atlanta" time={new Date()}/> */}
        {/* <TimeDisplay time={new Date()} /> */}
        {myClocks}
      </div>
    );
  }
}

export default App;





