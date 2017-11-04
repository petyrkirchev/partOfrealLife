/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SidebarMenu from '../../containers/SidebarMenu';

import Social from '../../components/Icon/Social';
import Payment from '../../components/Icon/Payment';

import logoColor from '../../images/logo-color.png';
import logoWhite from '../../images/logo-white.png';

class Sidebar extends Component {
  render() {
    const {  } = this.props;

    return (
      <aside className="sidebar">
        <div className="sidebar__menu">
          <SidebarMenu />
        </div>
        <div className="sidebar__footer">
          <img src={logoWhite} alt="Sabitie.bg logo" className="sidebar__footer__logo" />
          <h2 className="sidebar__footer__title">Последвайте ни</h2>
          <div className="m-b-lg">
            <Social
              className="m-r-xs"
              site="facebook"
              link="https://www.facebook.com/facebook-profile-page"
              background="white"
              color="dark"
            />
            <Social
              font={1.125}
              site="google-plus"
              link="https://www.google.com/facebook-profile-page"
              background="white"
              color="dark"
            />
          </div>
          <h2 className="sidebar__footer__title">Методи на плащане</h2>
          <div className="m-b-lg">
            <Payment payment={'mastercard'} color="light" />
            <Payment payment={'visa'} color="light" />
            <Payment payment={'paypal'} color="light" className="m-r-none" />
          </div>
          <p className="sidebar__footer__copyrights">© 2011-2017 Sabitie.bg. Всички права запазени.</p>
        </div>
      </aside>
    );
  }
}

Sidebar.propTypes = {

};

Sidebar.defaultProps = {

};

export default Sidebar;
