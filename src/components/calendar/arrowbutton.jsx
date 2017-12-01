import React from 'react';
import PropTypes from 'prop-types';

// arrow from http://fontawesome.io/icon/chevron-circle-left/
function arrow_left() {
  return (
    <path d="M1037 1395l102-102q19-19 19-45t-19-45l-307-307 307-307q19-19
      19-45t-19-45l-102-102q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 
      45l454 454q19 19 45 19t45-19zm627-499q0 209-103 385.5t-279.5 279.5-385.5 
      103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 
      385.5 103 279.5 279.5 103 385.5z" />
  );
}

// arrow from http://fontawesome.io/icon/chevron-circle-right/
function arrow_right() {
  return (
    <path d="M845 1395l454-454q19-19 19-45t-19-45l-454-454q-19-19-45-19t-45 
      19l-102 102q-19 19-19 45t19 45l307 307-307 307q-19 19-19 45t19 45l102 
      102q19 19 45 19t45-19zm819-499q0 209-103 385.5t-279.5 279.5-385.5 
      103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 
      385.5 103 279.5 279.5 103 385.5z" />
  );
}

class ArrowButton extends React.Component {
  render() {
    const path = this.props.label === 'next' ? arrow_right() : arrow_left();

    return (
      <svg
        width="1792"
        height="1792"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
        onClick={this.props.onClick}
      >
        <g>{path}</g>
      </svg>
    );
  }
}

ArrowButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

ArrowButton.defaultProps = {
  label: 'next',
  onClick: () => {}
};

export default ArrowButton;
