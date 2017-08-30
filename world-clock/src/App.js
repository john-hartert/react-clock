import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TIME</h2>
          <div id='root'>
          </div>
          <div id='roottwo'>
          </div>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;


// class bob extends Component {
//   render() {
//     return (
//       <div>
//         <h1>LOCAL TIME</h1>
//         <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//     );
//   }
// }
// setInterval(bob, 1000);


function bob() {
  const element = (
    <div>
      <h1>LOCAL TIME</h1>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(bob, 1000);



