import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import iconNext from '../../../images/icon__next.png';
import iconPrev from '../../../images/icon__prev.png';

class ButtonNavigation extends Component {
  render() {
    const { type, center, onClick, className } = this.props;

    return (
      <a
        className={classNames(
          'button__navigation',
          `button__navigation--${type}`, {
            'button__navigation--center': center,
          }, className)}
        role="presentation"
        onClick={onClick}
      >
        <span className="button__navigation__icon">
          <img
            src={type === 'next' ? iconNext : iconPrev}
            alt={`${type === 'next' ? 'Следваща' : 'Предишна'}`}
          />
        </span>
        { type === 'next' ? 'Следваща' : 'Предишна' }
      </a>
    );
  }
}

ButtonNavigation.propTypes = {
  type: PropTypes.oneOf(['next', 'prev']).isRequired,
  center: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ButtonNavigation.defaultProps = {
  center: false,
  onClick: () => {},
  className: '',
};

export default ButtonNavigation;
