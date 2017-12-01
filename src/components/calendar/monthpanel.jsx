import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function renderDay(day, selected) {
  const classNames = [];

  if (day.format('M-D-Y') === moment().format('M-D-Y')) {
    classNames.push('today');
  }
  if (day.day() === 0) {
    classNames.push('holiday');
  }
  if (day.format('M') !== moment(selected).format('M')) {
    classNames.push('fade');
  }

  return classNames.length ? (
    <div key={day.format('M-D')} className={classNames.join(' ')}>
      {day.format('D')}
    </div>
  ) : (
    <div key={day.format('M-D')}>{day.format('D')}</div>
  );
}

function renderWeek(week, selected) {
  const days = week.map(day => renderDay(day, selected));

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
