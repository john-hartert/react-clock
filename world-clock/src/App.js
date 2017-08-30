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




// Inside of the mounting phase you have:
//   constructor: first thing that happens with any class.
  
//   componentWillMount: method name that React.Component defines
//   if you over ride them it will use you defaults.
  
//   render: if you want something to show up you have to over ride
//   render.

//   componentDidMount: mounting something to the DOM

//   Render will always get called in an update unless componentWillUpdate
//   tells it not to render.

//   Last method in the lifecycle is componentWillUnmount.