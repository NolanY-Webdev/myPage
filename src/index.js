import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { StickyContainer, Sticky } from 'react-sticky';


ReactDOM.render(
  <StickyContainer className='Sticky'><App /></StickyContainer>,
  document.getElementById('root')
);
