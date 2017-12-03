import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Calendar from './calendar';

import './calendar.css';


// This component wraps the simple Calendar component
// to receive a date selected via the browser URL and
// push a new selection back onto the browser history.
//
// There is an additional onDateChange callback function
// that can be used to trigger an update in the parent
// component. Useful for components that use the URL for
// other things. 
class RouteCalendar extends React.Component {
  constructor(props) {
    super(props);
    
    const year = (props.match.params.year)
      ? parseInt(props.match.params.year, 10)
      : this.props.date.year();

    const month = (props.match.params.month)
      ? parseInt(props.match.params.month, 10) - 1
      : this.props.date.month();

    const day = this.props.date.day();

    this.state = {
      selectedDate: moment({ year, month, day })
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.setStateCallback = this.setStateCallback.bind(this); 
  }

  onDateChange(newDate) {
    this.setState({ selectedDate: newDate }, 
      this.setStateCallback(newDate)
    );
  }

  setStateCallback(newDate) {
    const location = '/calendar/' + newDate.format('YYYY/M')

    this.props.history.push(location);
    this.props.onDateChange(newDate);
  }

  render() {
    return (
      <Calendar
        date={this.state.selectedDate}
        onDateChange={this.onDateChange}
      />
    );
  }
}

RouteCalendar.defaultProps = {
  date: moment(),
  onDateChange: d => {},
};

RouteCalendar.propTypes = {
  date: PropTypes.object,
  match: PropTypes.object,
  onDateChange: PropTypes.func,
};

export default RouteCalendar;
