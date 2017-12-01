import React from 'react';
import PropTypes from 'prop-types';

import arrowleft from './arrow-left.svg';
import arrowright from './arrow-right.svg';

class ArrowButton extends React.Component {
  render() {
    const img = this.props.label === "next" ? arrowright : arrowleft;

    return (
      <img
        width={24}
        height={24}
        src={img}
        className="arrowimg"
        alt={this.props.label}
        onClick={this.props.onClick}
      />
    );
  }
}

ArrowButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
}

ArrowButton.defaultProps = {
  label: "next",
  onClick: () => {},
}

export default ArrowButton;
