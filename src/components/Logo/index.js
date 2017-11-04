import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import routes from '../../routes';

import whiteLogo from '../../images/logo-white.png';
import colorLogo from '../../images/logo-color.png';

class Logo extends Component {
  render() {
    const { className, white, history } = this.props;

    const logoClasses = classNames('logo', className);

    return (
      <div
        id="logo"
        className={logoClasses}
        onClick={() => { history.push(routes.getRoute('home')); }}
        role="presentation"
      >
        <img src={white ? whiteLogo : colorLogo} className="logo__image" alt="Събитие.bg лого" />
      </div>
    );
  }
}

Logo.propTypes = {
  className: PropTypes.string,
  white: PropTypes.bool,
  history: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

Logo.defaultProps = {
  className: '',
  white: false,
};

export default withRouter(Logo);
