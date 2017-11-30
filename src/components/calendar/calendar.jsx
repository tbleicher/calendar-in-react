import React from 'react';

import SelectHeader from './selectheader';
import MonthPanel from './monthpanel';
import { getCalendarWeeks } from './utils';

import './calendar.css';


export default class Calendar extends React.Component {
  
  render() {

    const weeks = getCalendarWeeks();

    return (
      <div className="calendar">
        <SelectHeader
          year={2017} 
          month={11}
        />
        <MonthPanel
          weeks={weeks}
        /> 
      </div>
    )
  }
}