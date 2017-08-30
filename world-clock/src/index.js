import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// function bob() {
//     const element = (
//       <div>
//         <h1>LOCAL TIME</h1>
//         <h2>{new Date().toLocaleTimeString()}</h2>
//       </div>
//     );
//     ReactDOM.render(
//       element,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(bob, 1000);
  

registerServiceWorker();
