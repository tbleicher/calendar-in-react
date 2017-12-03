import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class CalendarDay extends React.Component {
  render() {
    const key = this.props.date.format('M-D');
    const onClick = () => this.props.onClick(this.props.date);
    const classNames = [];

    if (this.props.date.format('M-D-Y') === moment().format('M-D-Y')) {
      classNames.push('today');
    }

    if (
      this.props.date.format('M-D-Y') === this.props.selected.format('M-D-Y')
    ) {
      classNames.push('selected');
    }

    if (this.props.date.day() === 0) {
      classNames.push('holiday');
    }

    if (this.props.date.format('M') !== this.props.selected.format('M')) {
      classNames.push('fade');
    }

    return classNames.length ? (
      <div key={key} className={classNames.join(' ')} onClick={onClick}>
        {this.props.date.format('D')}
      </div>
    ) : (
      <div key={key} onClick={onClick}>
        {this.props.date.format('D')}
      </div>
    );
  }
}

CalendarDay.defaultProps = {
  selected: moment(),
  onClick: () => {}
};

CalendarDay.propTypes = {
  date: PropTypes.object.isRequired,
  selected: PropTypes.object,
  onClick: PropTypes.func
};

export default CalendarDay;
