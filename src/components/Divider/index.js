import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Divider extends Component {
  render() {
    const { margin, color } = this.props;

    return (
      <div
        className="divider"
        style={{
          margin: `${margin}px 0`,
          backgroundColor: color,
        }}
      />
    );
  }
}

Divider.propTypes = {
  margin: PropTypes.number,
  color: PropTypes.string,
};

Divider.defaultProps = {
  margin: 40,
  color: '',
};

export default Divider;
