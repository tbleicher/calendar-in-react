import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Select from 'react-select';

import 'react-select/dist/react-select.css';

class SelectHeader extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      year: props.year,
      month: props.month,
    };

    this.handleDateChange = this.handleDateChange.bind(this); 
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ 
      month: newProps.month,
      year: newProps.year
     });
  }

  handleDateChange(newYear, newMonth) {
    const month = newMonth || this.state.month;
    const year = newYear || this.state.year;
    const date = moment({ year, month, day: 15 })

    this.setState({ month, year }, this.props.onDateChange(date));
  }

  handleMonthChange(selectedOption) {
    this.handleDateChange(null, selectedOption.value);
  }

  handleYearChange(selectedOption) {
    this.handleDateChange(selectedOption.value);
  }

  render() {

    return (
      <div className="header">
        <Select
          name="year-selector"
          value={this.state.year}
          onChange={this.handleYearChange}
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
          onChange={this.handleMonthChange}
          options={[
            { value:  0, label: 'January' },
            { value:  1, label: 'February' },
            { value:  2, label: 'March' },
            { value:  3, label: 'April' },
            { value:  4, label: 'May' },
            { value:  5, label: 'June' },
            { value:  6, label: 'July' },
            { value:  7, label: 'August' },
            { value:  8, label: 'September' },
            { value:  9, label: 'October' },
            { value: 10, label: 'November' },
            { value: 11, label: 'December' },
          ]}
          clearable={false}
        />
      </div>
    )
  }
}

SelectHeader.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onDateChange: PropTypes.func.isRequired,
}

export default SelectHeader;