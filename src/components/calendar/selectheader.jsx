import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import moment from 'moment';

import ArrowButton from './arrowbutton';

import 'react-select/dist/react-select.css';

function getMonthOptions(date) {
  //TODO: create list based on locale 
  return [
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
  ];
}

function getYearOptions(date) {
  //TODO: create list dynamically based on date
  return [
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' },
    { value: 2017, label: '2017' },
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' },
    { value: 2020, label: '2020' },
  ];
}


class SelectHeader extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      selectedDate: props.selectedDate,
    };

    this.handleDateChange = this.handleDateChange.bind(this); 
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.incrementMonth = this.incrementMonth.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      selectedDate: newProps.selectedDate, 
     });
  }

  handleDateChange(newYear, newMonth) {
    const month = newMonth || this.state.selectedDate.month();
    const year = newYear || this.state.selectedDate.year();
    const selectedDate = moment({ year, month, day: this.state.selectedDate.day() })

    this.setState({ selectedDate }, this.props.onDateChange(selectedDate));
  }

  handleMonthChange(selectedOption) {
    this.handleDateChange(null, selectedOption.value);
  }

  handleYearChange(selectedOption) {
    this.handleDateChange(selectedOption.value);
  }

  incrementMonth(step) {
    let selectedDate = moment(this.state.selectedDate);
    
    if (step > 0) {
      selectedDate.add(1, 'month')
    } else {
      selectedDate.subtract(1, 'month');
    }
    
    this.setState({ selectedDate }, this.props.onDateChange(selectedDate));
  }

  render() {

    return (
      <div className="header">
        <Select
          name="year-selector"
          value={this.state.selectedDate.year()}
          onChange={this.handleYearChange}
          options={getYearOptions(this.state.selectedDate)}
          clearable={false}
        />
        <ArrowButton
          label="previous"
          onClick = {() => this.incrementMonth(-1)}
        />
        <Select
          name="month-selector"
          value={this.state.selectedDate.month()}
          onChange={this.handleMonthChange}
          options={getMonthOptions(this.state.selectedDate)}
          clearable={false}
        />
        <ArrowButton
          label="next"
          onClick = {() => this.incrementMonth(+1)}
        />
      </div>
    )
  }
}

SelectHeader.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  selectedDate: PropTypes.object,
}

export default SelectHeader;