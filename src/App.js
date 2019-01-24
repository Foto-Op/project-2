import React, { Component } from 'react';
import './App.scss';
import Gallery from './components/gallery/Gallery';
import Landing from './components/landing/Landing';
import NavBar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Wasssup from Dan</h1>
        <h1>Hi from Patric</h1>
        <Gallery />
        <Landing />
        <NavBar />
      </div>
    );
  }
}

export default App;
