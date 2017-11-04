import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ButtonMenuToggle extends Component {
  render() {
    const { className, transparent, onClick } = this.props;

    const menuToggleClasses = classNames('menu-toggle', className, {
      'menu-toggle--transparent': transparent,
    });

    return (
      <button className={menuToggleClasses} onClick={onClick}>
        <div className="menu-toggle__bars">
          <span className="menu-toggle__bars__bar" />
          <span className="menu-toggle__bars__bar" />
          <span className="menu-toggle__bars__bar menu-toggle__bars__bar--last" />
        </div>
      </button>
    );
  }
}

ButtonMenuToggle.propTypes = {
  className: PropTypes.string,
  transparent: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ButtonMenuToggle.defaultProps = {
  className: '',
  transparent: false,
};

export default ButtonMenuToggle;
