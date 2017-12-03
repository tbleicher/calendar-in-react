import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import logo from './logo.svg';
import Calendar from './components/calendar';

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Calendar in React</h1>
          </header>
          <Route path="/calendar/:year?/:month?" component={Calendar}/>
        </div>
      </Router>
    );
  }
}

export default App;
