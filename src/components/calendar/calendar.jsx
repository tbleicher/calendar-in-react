import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import SelectHeader from './selectheader';
import MonthPanel from './monthpanel';
import { getCalendarWeeks } from './utils';

import './calendar.css';

class Calendar extends React.Component {
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
  }

  onDateChange(newDate) {
    const location = '/calendar/' + newDate.format('YYYY/M')
    
    this.setState({ selectedDate: newDate }, 
      this.props.history.push(location)
    );
  }

  render() {
    const month = this.state.selectedDate.month() // month range is 0-11
    const year = this.state.selectedDate.year()
    const weeks = getCalendarWeeks(this.state.selectedDate);

    return (
      <div className="calendar">
        <SelectHeader
          year={year}
          month={month}
          selectedDate={this.state.selectedDate}
          onDateChange={this.onDateChange}
        />
        <MonthPanel weeks={weeks} selectedDate={this.state.selectedDate} />
      </div>
    );
  }
}

Calendar.defaultProps = {
  date: moment(),
  //onDateChange: d => console.log(`selected date: ${d.format('LL')}`)
};

Calendar.propTypes = {
  date: PropTypes.object,
  match: PropTypes.object,
  //onDateChange: PropTypes.func
};

export default Calendar;
