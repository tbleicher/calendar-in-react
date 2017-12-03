import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import logo from './logo.svg';
import { RouteCalendar as Calendar } from './components/calendar';

import './App.css';


// This function provides a way to communicate date selections
// made in the calendar to higher level components where it can
// be commited to a store or central app state
function onDateChange(newDate) {
  console.log(`selected date: ${newDate.format('LL')}`);
}


// This is the main App component that displays a header and
// a route-dependent component (here only the Calendar)
//
// I have to specify the route with a leading '/calendar/'
// because the app will be deployed in a subdirectory on
// a shared domain ('http://my.domain.com/calendar').
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
