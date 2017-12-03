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

    this.state = {
      selectedDate: moment(this.props.date)
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(newDate) {
    this.setState({ selectedDate: newDate }, 
      this.props.onDateChange(newDate)
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
  onDateChange: d => {},
};

Calendar.propTypes = {
  date: PropTypes.object,
  onDateChange: PropTypes.func,
};

export default Calendar;
