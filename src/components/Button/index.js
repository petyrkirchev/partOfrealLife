import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { onClick } = this.props;

    if (!onClick) {
      event.stopPropagation();
      return;
    }

    if (typeof onClick === 'string') {
      window.open(onClick, '_blank');
      return;
    }

    onClick();
  }

  render() {
    const {
      children,
      width,
      center,
      size,
      type,
      mode,
      preIcon,
      postIcon,
      iconSize,
      block,
      disableHover,
      className,
    } = this.props;

    return (
      <div
        role="button"
        tabIndex={0}
        style={{ width }}
        className={classNames('button',
        `button--${size}`, `button--${type}`, {
          'button--center': center,
          'button--block': block,
          'button--hover': !disableHover,
          'button--reversed': mode === 'reversed',
          'button--bordered': mode === 'bordered',
          'button--only-icons': !children,
        }, className)}
        onClick={this.onClick}
      >
        { preIcon ? (
          <span className="button--preIcon">
            <img
              className="button__icon"
              src={preIcon}
              alt={`Icon ${children}`}
              style={{
                width: iconSize,
                height: iconSize,
                marginTop: -iconSize / 2,
              }}
            />
          </span>
        ) : null }
        { children }
        { postIcon ? (
          <span className="button--postIcon">
            <img className="button__icon" src={postIcon} alt={`Icon ${children}`} style={{ width: iconSize, height: iconSize }} />
          </span>
        ) : null}
      </div>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  center: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'm', 'md', 'lg', 'xl']),
  type: PropTypes.oneOf(['default', 'success', 'info', 'warning', 'danger']),
  mode: PropTypes.oneOf(['', 'reversed', 'bordered']),
  preIcon: PropTypes.string,
  postIcon: PropTypes.string,
  iconSize: PropTypes.number,
  block: PropTypes.bool,
  disableHover: PropTypes.bool,
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  className: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  type: 'default',
  mode: '',
  preIcon: null,
  postIcon: null,
  iconSize: 16,
  size: 'xs',
  width: 'auto',
  center: false,
  block: false,
  disableHover: false,
  onClick: '',
  className: '',
};

export default Button;
