/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import FormControl from '../Widgets/FormControl';

class FormInput extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      option: '',
      focused: false,
      onPlaceholder: false,
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  onFocus() {
    this.setState({ focused: true });
  }

  onBlur() {
    if (this.state.onPlaceholder) {
      return;
    }

    this.setState({ focused: false });
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleOptionChange(event) {
    this.setState({ option: event.target.value });
  }

  render() {
    const { id, placeholder, options, hint, size, required, className, onChange } = this.props;

    return (
      <FormControl
        hint={hint}
        size={size}
        focused={this.state.focused}
        className={className}
      >
        <input
          id={id}
          type="text"
          className={classNames('form-input')}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </FormControl>
    );

    return (
      <div
        className={classNames('input', {
          input__focused: this.state.focused,
        }, `input--${size}`)}
      >
        { options.length ? (
          <div className="input__options" ref={(item) => { this.options = item; }}>
            <select value={this.state.option} onChange={this.handleOptionChange}>
              { options.map(item => <option key={item} value={item}>{ item }</option>) }
            </select>
            <i className="input__options__icon fa fa-caret-down" />
          </div>
        ) : null }
        <div className={`input__control ${hint ? 'has-hint' : ''}`} style={{ marginLeft: options.length ? 100 : 0 }}>
          { !this.state.value ?
            <button
              className="input__placeholder"
              onMouseEnter={() => this.setState({ onPlaceholder: true })}
              onMouseOut={() => this.setState({ onPlaceholder: false })}
              onClick={() => this.input.focus()}
            >
              { placeholder }{ required ? ' *:' : ''}
            </button> : null }
          <input
            id={id}
            ref={(item) => { this.input = item; }}
            value={this.state.value}
            onChange={this.handleInputChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            type="text"
          />
        </div>
        { hint ? (
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                { hint }
              </Tooltip>
            }
          >
            <div className="input__hint">
              <i className="fa fa-question" />
            </div>
          </OverlayTrigger>
        ) : null }
      </div>
    );
  }
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  hint: PropTypes.string,
  size: PropTypes.oneOf(['md', 'lg', 'xl']),
  required: PropTypes.bool,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  placeholder: '',
  options: [],
  hint: '',
  size: 'lg',
  required: false,
  className: '',
};

export default FormInput;
