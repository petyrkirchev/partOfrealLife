/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FormHint from '../FormHint';

class FormControl extends Component {
  render() {
    const { children, id, inline, hint, size, focused, className } = this.props;

    return (
      <div
        className={classNames('form__control', `form__control--${size}`, {
          'form__control--inline': inline,
          'form__control--focused': focused,
        }, className)}
      >
        { children }
        { hint && <FormHint id={id} hint={hint} size={size} focused={focused} /> }
      </div>
    );
  }
}

FormControl.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  inline: PropTypes.bool,
  hint: PropTypes.string,
  size: PropTypes.oneOf(['md', 'lg', 'xl']),
  focused: PropTypes.bool,
  className: PropTypes.string,
};

FormControl.defaultProps = {
  id: '',
  label: '',
  inline: false,
  hint: '',
  size: 'lg',
  focused: false,
  className: '',
};

export default FormControl;
