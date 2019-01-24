import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import NavBar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <h1>Wasssup from Dan</h1>
          <h1>Hi from Patric</h1>
          <NavBar />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
