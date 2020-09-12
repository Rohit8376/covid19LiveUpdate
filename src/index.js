
import ReactDOM from 'react-dom';
import App from './App';


import React, { Component } from 'react'
import Details from './Details';

class Covid extends Component {
  render() {
    return (
        <>
          <React.StrictMode>
          <App />
          <Details />
         </React.StrictMode>
        </>
    )
  }
}



ReactDOM.render(

      <Covid />,
    
  document.getElementById('root')

);

