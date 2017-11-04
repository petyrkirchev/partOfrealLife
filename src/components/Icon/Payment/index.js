import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../index';

class Payment extends Component {
  render() {
    const { payment, size, font, type, color, background, className } = this.props;

    return (
      <Icon
        size={size}
        font={font}
        type={type}
        className={`payment__icon m-r-xs ${className}`}
        color={color}
        background={background}
        border={{ width: 3, color: '#534741', style: 'solid' }}
      >
        <i className={`fa fa-cc-${payment}`} />
      </Icon>
    );
  }
}

Payment.propTypes = {
  payment: PropTypes.oneOf([
    'paypal',
    'mastercard',
    'visa',
  ]).isRequired,
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  font: PropTypes.number,
  type: PropTypes.oneOf(['normal', 'rounded', 'circle']),
  color: PropTypes.oneOf(['light', 'dark']),
  background: PropTypes.string,
  className: PropTypes.string,
};

Payment.defaultProps = {
  size: {
    width: 56,
    height: 37,
  },
  font: 2.5,
  type: 'normal',
  color: 'dark',
  background: 'transparent',
  className: '',
};

export default Payment;
