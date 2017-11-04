import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ButtonDownload extends Component {
  render() {
    const { width, label, type, icon, inverse, last, className } = this.props;

    return (
      <a
        className={classNames(
          'button__download',
          `button__download--${type}`,
          {
            'button__download--no-icon': !icon,
            'button__download--inverse': inverse,
            'button__download--last': last,
          },
          className)}
        style={{ width }}
      >
        { label }
        { icon && (
          <span className="button__download__icon">
            <img src={icon} alt={`Свали ${type}`} />
          </span>
        )}
      </a>
    );
  }
}

ButtonDownload.propTypes = {
  width: PropTypes.number,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['pdf', 'csv', 'add']).isRequired,
  icon: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
  last: PropTypes.bool,
  className: PropTypes.string,
};

ButtonDownload.defaultProps = {
  width: '100%',
  inverse: false,
  last: false,
  className: '',
};

export default ButtonDownload;
