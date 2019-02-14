import React, { Component } from 'react';
import './Landing.scss';

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <div className='landing landing__top'>
          <h1>DERECK ZOOLANDER</h1>
        </div>
        <div className='landing landing__navbar'>
          <h4>About Me</h4>
          <h4>Contact</h4>
          <h4>Appointments</h4>
        </div>
        <div className='landing landing__body'>Drone Gif</div>
        <div className='landing landing__lowerbody'>
          Click Me/Scroll Animation
        </div>
      </div>
    );
  }
}

export default Landing;
