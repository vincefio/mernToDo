import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './components/Appbar'
import Additem from './components/Additem'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Appbar from './components/Appbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SimpleAppBar />
          <Additem />


        </div>
      </Router>
    );
  }
}

export default App;
