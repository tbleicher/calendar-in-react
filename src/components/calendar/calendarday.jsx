import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class CalendarDay extends React.Component {
  render() {
    const classNames = [];

    if (this.props.date.format('M-D-Y') === moment().format('M-D-Y')) {
      classNames.push('today');
    }

    if (this.props.date.format('M-D-Y') === this.props.selected.format('M-D-Y')) {
      console.log(`selected: ${this.props.selected.format('LL')}`)
      classNames.push('selected');
    }

    if (this.props.date.day() === 0) {
      classNames.push('holiday');
    }

    if (this.props.date.format('M') !== this.props.selected.format('M')) {
      classNames.push('fade');
    }

    return classNames.length ? (
      <div key={this.props.date.format('M-D')} className={classNames.join(' ')}>
        {this.props.date.format('D')}
      </div>
    ) : (
      <div key={this.props.date.format('M-D')}>{this.props.date.format('D')}</div>
    );
  }
}

CalendarDay.defaultProps = {
  selected: moment(),
}

CalendarDay.propTypes = {
  date: PropTypes.object, 
  selected: PropTypes.object,
}

export default CalendarDay;