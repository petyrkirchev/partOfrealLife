import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import iconLoader from '../../images/icon__loader.svg';

class Loader extends Component {
  render() {
    const { center, full } = this.props;

    return (
      <div
        className={classNames('loader', {
          'loader--center': center,
          'loader--full': full,
        })}
      >
        { full && <div className="loader__overlay" /> }
        <img src={iconLoader} alt="Зареждане" />
      </div>
    );
  }
}

Loader.propTypes = {
  center: PropTypes.bool,
  full: PropTypes.bool,
};

Loader.defaultProps = {
  center: false,
  full: false,
};

export default Loader;
