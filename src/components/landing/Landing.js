import React, { Component } from "react";
import "./Landing.scss";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className='landing landing__top'>Top</div>
        <div className='landing landing__navbar'>Navbar</div>
        <div className='landing landing__body'>Drone Gif</div>
        <div className='landing landing__lowerbody'>Click Me/Scroll Animation</div>
      </div>
    );
  }
}

export default Landing;