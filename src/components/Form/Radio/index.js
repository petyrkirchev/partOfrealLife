import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Radio extends Component {
  render() {
    const { id, name, label, checked, disabled, type, onChange, className } = this.props;

    const height = typeof this.props.height === 'number' ? `${this.props.height}px` : this.props.height;

    return (
      <div
        className={classNames('form__radio', `form__radio--${type}`, className)}
        style={{ height, lineHeight: height }}
      >
        <input
          id={id}
          name={name}
          type="radio"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <label htmlFor={id}>{ label }</label>
      </div>
    );
  }
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  type: PropTypes.oneOf(['default', 'light', 'dark']),
  onChange: PropTypes.func,
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  className: '',
  height: 16,
  type: 'default',
  onChange: () => {},
};

export default Radio;
