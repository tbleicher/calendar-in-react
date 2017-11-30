import React from 'react';

import MonthPanel from './monthpanel';
import { getCalendarDays } from './utils';

import './calendar.css';

function renderWeek(week) {
  const days = week.map(day => <div>{day}</div>)
  return (
    <div className="week">{days}</div>
  )
}


export default class Calendar extends React.Component {
  
  render() {

    const weeks = getCalendarDays();

    return (
      <div>
        <div>
          <h2>Year - Month</h2>
        </div>
        <MonthPanel weeks={weeks} /> 
      </div>
    )
  }
}