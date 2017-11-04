import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    const { id, label, disabled, type, className, check, onChange } = this.props; //eslint-disable-line

    const height = typeof this.props.height === 'number' ? `${this.props.height}px` : this.props.height;

    return (
      <div
        className={classNames('form__checkbox', `form__checkbox--${type}`, className)}
        style={{ height, lineHeight: height }}
      >
        <input
          id={id}
          type="checkbox"
          checked={check}
          disabled={disabled}
          onChange={onChange}
        />
        <label htmlFor={id}>{ label }</label>
      </div>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  type: PropTypes.oneOf(['default', 'light', 'dark']),
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  className: '',
  height: 20,
  type: 'default',
};

export default Checkbox;
