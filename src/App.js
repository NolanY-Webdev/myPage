import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro';
import Contact from './components/Contact';
import Goals from './components/Goals';
import Projects from './components/Projects';
import StickyNav from './components/StickyNav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <StickyNav />
        <Goals />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
