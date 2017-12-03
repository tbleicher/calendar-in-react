import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import CalendarDay from './calendarday';

function renderWeek(week, selected) {
  const days = week.map(date => 
    <CalendarDay 
      key={date.dayOfYear()} 
      date={date} 
      selected={selected} 
    />
  );

  return (
    <div key={week[0]} className="week">
      {days}
    </div>
  );
}

class MonthPanel extends React.Component {
  render() {
    const weeks = this.props.weeks.map(week =>
      renderWeek(week, this.props.selectedDate)
    );

    return <div className="month">{weeks}</div>;
  }
}

MonthPanel.propTypes = {
  selectedDate: moment()
};

MonthPanel.propTypes = {
  weeks: PropTypes.array.isRequired,
  selectedDate: PropTypes.object
};

export default MonthPanel;
