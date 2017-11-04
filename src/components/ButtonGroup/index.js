import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

class ButtonGroup extends Component {
  render() {
    const { buttons, width, direction, size, type, className } = this.props;

    return (
      <div
        className={classNames('button-group', `button-group--${type}`, `button-group--${direction}`, className)}
        style={{ width }}
      >
        { buttons.map((button, index) => (
          <Button
            key={button.name}
            className={classNames('button-group__button', {
              'button-group__button--first': index === 0,
              'button-group__button--last': index === buttons.length - 1,
            })}
            size={size}
            type={type}
            disableHover
            preIcon={button.preIcon}
            postIcon={button.postIcon}
            iconSize={button.iconSize}
            mode={button.mode}
          >
            { button.label }
          </Button>
        ))}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    mode: PropTypes.oneOf(['', 'reversed', 'bordered']),
    preIcon: PropTypes.element,
    postIcon: PropTypes.element,
    iconSize: PropTypes.number,
    onClick: PropTypes.func,
  })).isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  type: PropTypes.oneOf(['default', 'success', 'info', 'warning', 'danger']),
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  width: 'auto',
  direction: 'vertical',
  size: 'sm',
  type: 'default',
  className: '',
};

export default ButtonGroup;
