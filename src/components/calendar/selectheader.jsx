import React from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

export default class SelectHeader extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      year: props.year,
      month: props.month,
    };

    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this); 
  }

  handleMonthChange(selectedOption) {
    console.log(`Selected: ${selectedOption.label}`);
  }

  handleYearChange(selectedOption) {
    console.log(`Selected: ${selectedOption.label}`);
  }


  render() {

    return (
      <div className="header">
        <Select
          name="year-selector"
          value={this.state.year}
          onChange={this.handleChange}
          options={[
            { value: 2014, label: '2014' },
            { value: 2015, label: '2015' },
            { value: 2016, label: '2016' },
            { value: 2017, label: '2017' },
            { value: 2018, label: '2018' },
            { value: 2019, label: '2019' },
            { value: 2020, label: '2020' },
          ]}
          clearable={false}
        />
        <Select
          name="month-selector"
          value={this.state.month}
          onChange={this.handleChange}
          options={[
            { value:  1, label: 'January' },
            { value:  2, label: 'February' },
            { value:  3, label: 'March' },
            { value:  4, label: 'April' },
            { value:  5, label: 'May' },
            { value:  6, label: 'June' },
            { value:  7, label: 'July' },
            { value:  8, label: 'August' },
            { value:  9, label: 'September' },
            { value: 10, label: 'October' },
            { value: 11, label: 'November' },
            { value: 12, label: 'December' },
          ]}
          clearable={false}
        />
      </div>
    )
  }
}