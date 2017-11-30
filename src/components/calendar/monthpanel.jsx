import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


function renderDay(day) {
  const classNames = []
  
  if (day.format('M-D') === moment().format('M-D')) {
    classNames.push('today');
  }
  if (day.day() === 0) {
    classNames.push('holiday');
  }
  if (day.format('M') !== moment().format('M')) {
    classNames.push('fade');
  }


  return classNames.length 
    ? <div key={day.format('M-D')} className={classNames.join(' ')}>{day.format('D')}</div>
    : <div key={day.format('M-D')}>{day.format('D')}</div>;
}
 
function renderWeek(week) {
  const days = week.map(day => renderDay(day))

  return (
    <div key={week[0]}className="week">{days}</div>
  )
}


export default class MonthPanel extends React.Component {
  
  render() {
    const weeks = this.props.weeks.map(week => renderWeek(week))

    return (
      <div className="month">
        {weeks}
      </div>  
    )
  }
}

MonthPanel.propTypes = {
  weeks: PropTypes.array.isRequired,
}