import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import logo from './logo.svg';
import Calendar from './components/calendar';

import './App.css';

function onDateChange(newDate) {
  console.log(`selected date: ${newDate.format('LL')}`);
}

class App extends Component {
  
  render() {
    const calendarProps = { onDateChange };

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Calendar in React</h1>
          </header>
          {/* this explicit declaration of Route allows us to define
              properties for the component rendered in the Route */ }
          <Route
            path="/calendar/:year?/:month?" 
            render={(routeProps) => (
              <Calendar {...routeProps} { ...calendarProps } />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
