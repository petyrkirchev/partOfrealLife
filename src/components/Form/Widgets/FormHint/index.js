/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

class FormHint extends Component {
  render() {
    const { id, hint, size, focused } = this.props;

    return (
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id={id}>
            { hint }
          </Tooltip>
        }
      >
        <div
          className={classNames('form-hint', `form-hint--${size}`, {
            'form-hint--focused': focused,
          })}
        >
          <i className="fa fa-question" />
        </div>
      </OverlayTrigger>
    );
  }
}

FormHint.propTypes = {
  id: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['md', 'lg', 'xl']),
  focused: PropTypes.bool,
};

FormHint.defaultProps = {
  id: '',
  hint: '',
  size: 'lg',
  focused: false,
};

export default FormHint;
