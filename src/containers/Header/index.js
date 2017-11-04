import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import classNames from 'classnames';
import routes from '../../routes';
import { debounce } from '../../utils';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import MenuToggle from '../../components/Button/MenuToggle';

import iconProfile from '../../images/icon__profile.png';
import iconProfileColor from '../../images/icon__profile--color.png';

import Login from '../Login/index';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      navigationVisible: false,
      showLogin: false,
      user: '',
    };

    this.onResize = this.onResize.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', debounce(this.onResize, 250));
    const username = sessionStorage.getItem('username');
    this.setState({ user: username });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', debounce(this.onResize, 250));
  }

  onResize(event) {
    if (event.target.outerWidth > 768) {
      this.setState({
        navigationVisible: false,
      });
    }
  }

  open() {
    this.setState({ showLogin: true });
  }

  close() {
    this.setState({ showLogin: false });
    const username = sessionStorage.getItem('username');
    this.setState({ user: username });
  }

  toggleNavigation() {
    this.setState({
      navigationVisible: !this.state.navigationVisible,
    });
  }

  render() {
    const { fixed, transparent, user, history } = this.props;
    const usernameStyle = {
      color: 'orange',
    };

    return (
      <header
        className={classNames('header', {
          'header--transparent': transparent,
          'header--fixed': fixed,
        })}
      >
        <Logo white={transparent} className="header__logo" />
        <nav
          className={classNames('header__navigation', {
            'header__navigation--hidden': !this.state.navigationVisible,
          })}
        >
          { user.name ? (
            <a className="header__navigation__profile">
              {/* TODO: Set default image */}
              <div
                className="header__navigation__profile--image"
                style={{ backgroundImage: `url('${user.image}')` }}
              />
              <span className="header__navigation__profile--name">
                { user.name }
              </span>
            </a>
          ) : (
            <div role="presentation" onClick={this.open}>
              <a id="modal" className="header__navigation__profile" >
                <img
                  src={this.state.navigationVisible ||
                   !transparent ? iconProfileColor : iconProfile}
                  className="header__navigation__profile--icon"
                  alt="Go to profile"
                />
                <Modal show={this.state.showLogin} onHide={this.close}>
                  <Login closeModal={this.close} />
                </Modal>
                <span style={usernameStyle}>{this.state.user}</span>
              </a>
            </div>
          )}
          <MenuToggle className="header__menu-toggle" onClick={this.toggleNavigation} />
          <div className="clearfix visible-xs visible-xs" />
          <ul>
            <li>
              <a>Събития</a>
            </li>
            <li>
              <a>Цени</a>
            </li>
            <li>
              <a>Градове</a>
            </li>
            <li>
              <a>Помощ</a>
            </li>
            <li>
              <Button
                className="header__navigation__button"
                type="warning"
                size="md"
                width={160}
                block
                onClick={() => { history.push(routes.getRoute('stepOne')); }}
              >
                Създай събитие
              </Button>
            </li>
          </ul>
        </nav>
        <MenuToggle
          className="header__menu-toggle"
          transparent={transparent}
          onClick={this.toggleNavigation}
        />
        <div className="clearfix" />
      </header>
    );
  }
}

Header.propTypes = {
  fixed: PropTypes.bool,
  transparent: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  history: PropTypes.shape.isRequired,
};

Header.defaultProps = {
  fixed: false,
  transparent: false,
  user: {},
};

export default withRouter(Header);
