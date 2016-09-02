import React, { Component } from 'react';
import './index.css';
import { StickyContainer, Sticky } from 'react-sticky';

class StickyNav extends Component {
  render() {

    return (
      <Sticky className='StickyNav'>
        <h1> This is GOING TO BE A STICKY NAV BAR </h1>
      </Sticky>
      );
  }
}

export default StickyNav;