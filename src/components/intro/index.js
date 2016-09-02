import React, { Component } from 'react';
import './index.css';
import logo from '../../logo.svg';

class Intro extends Component {
  render() {

    return (

      <div className='Intro'>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
          <h1>Intro</h1>
        </div>
      </div>
      );
  }
}

export default Intro;