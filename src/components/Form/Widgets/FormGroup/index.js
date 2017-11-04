import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FormGroup extends Component {
  render() {
    const { children, label, important } = this.props;

    return (
      <div
        className={classNames('form-group', {
          'form-group--important': important,
        })}
      >
        { !important && label && <span className="form-group__label">{ label }</span> }
        { children }
      </div>
    );
  }
}

FormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  label: PropTypes.string,
  important: PropTypes.bool,
};

FormGroup.defaultProps = {
  label: '',
  important: false,
};

export default FormGroup;
