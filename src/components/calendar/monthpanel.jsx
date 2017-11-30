import React from 'react';
import PropTypes from 'prop-types';

function renderWeek(week) {
  const days = week.map(day => <div>{day}</div>)
  return (
    <div className="week">{days}</div>
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