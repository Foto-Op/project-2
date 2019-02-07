import React, { Component } from "react";
import "./Landing.scss";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className='landing top'>Top</div>
        <div className='landing'>Navbar</div>
        <div className='landing'>Drone Gif</div>
        <div className='landing'>Click Me/Scroll Animation</div>
      </div>
    );
  }
}

export default Landing;