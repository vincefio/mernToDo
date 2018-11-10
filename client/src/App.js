import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './components/Appbar'
import Additem from './components/Additem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <Additem />
      </div>
    );
  }
}

export default App;
