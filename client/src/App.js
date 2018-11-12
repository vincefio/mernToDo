import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './components/Appbar'
import Additem from './components/Additem'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Appbar from './components/Appbar'
import Items from './components/Items'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SimpleAppBar />
          <div className="container">

            <Items />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
