/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router'
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Breadcrumbs from "../../Breadcrumbs";

import Profile from '../../Profile/';
import TicketsInvoices from '../../TicketsInvoices/';
import News from '../../News/';
import Business from '../../Business/';
import Organizer from '../../Organizer/';
import Siteinvoices from '../../Siteinvoices/';
import Payment from '../../Payment/';
import PR from '../../PR/';
import EventApp from '../../EventApp/';
import Advice from '../../Advice/';
import Users from '../../Users/';
import Events from '../../Events/';
import Statistic from '../../Statistic/';
import Saldo from '../../Saldo/';
import PromoCode from '../../PromoCode/';
import Integration from '../../Integration/';
import Mail from '../../Mail/';
import ChangeUsername from '../../ChangeUsername/';
import ChangePasswordAndEmail from '../../ChangePasswordAndEmail/';
import ChangePasswordApp from '../../ChangePasswordApp/';
import SendMail from '../../SendMail/';
import EventPoll from '../../EventPoll/';
import SearchUsers from '../../SearchUsers/';
import MakeGroup from '../../MakeGroup/';

class WrapperBackSite extends Component {
  render() {
    const { children, breadcrumbsPath } = this.props;
    return (
      <div className="wrapper__back-site">
        <Header fixed />
        <Sidebar />
        <Breadcrumbs
          className="wrapper__back-site__breadcrumbs"
          path={breadcrumbsPath}
          style={{ paddingLeft: 345 }}
        />
        <div className="wrapper__back-site__content" style={{ marginLeft: 345 }}>
                  
 
          <Route exact path='/statistics/profile' component={Profile} />
          
          <Route exact path='/statistics/profile/tickets&invoces' component={TicketsInvoices} />
          <Route exact path='/statistics/news' component={News} />
          <Route exact path='/statistics/organizer/business' component={Business} />
          <Route exact path='/statistics/organizer' component={Organizer} />
          <Route exact path='/statistics/organizer/siteinvoices' component={Siteinvoices} />
          <Route exact path='/statistics/organizer/payment' component={Payment} />
          <Route exact path='/statistics/organizer/pr' component={PR} />
          <Route exact path='/statistics/organizer/event' component={EventApp} />
          <Route exact path='/statistics/organizer/advice' component={Advice} />
          <Route exact path='/statistics/organizer/users' component={Users} />
          <Route exact path='/statistics/events' component={Events} />
          <Route exact path='/statistics/events/statistic'component={()=>{
                     return <div>{children}</div>
                   }} />
          <Route exact path='/statistics/events/saldo' component={Saldo} />
          <Route exact path='/statistics/events/promo' component={PromoCode} />
          <Route exact path='/statistics/events/integration' component={Integration} />
          <Route exact path='/statistics/events/poll' component={EventPoll} />
          <Route exact path='/statistics/events/mail' component={Mail} />
          <Route exact path='/statistics/security/username' component={ChangeUsername} />
          <Route exact path='/statistics/security/password&email' component={ChangePasswordAndEmail} />
          <Route exact path='/statistics/security/app-pass' component={ChangePasswordApp} />
          <Route exact path='/statistics/events/mail/send' component={SendMail} />
          <Route exact path='/statistics/events/mail/poll' component={EventPoll} />
          <Route exact path='/statistics/organizer/users/search' component={SearchUsers} />
          <Route exact path='/statistics/organizer/users/group' component={MakeGroup} />
        </div>
      </div>
    );
  }
}

WrapperBackSite.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  breadcrumbsPath: PropTypes.shape({
    label: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

WrapperBackSite.defaultProps = {

};

export default WrapperBackSite;
