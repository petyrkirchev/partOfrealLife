/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.jpg';
import organizer from '../../images/organizer.svg';
import events from '../../images/events.svg';
import security from '../../images/security.svg';

class SidebarMenu extends Component {
  constructor() {
    super();
    this.state = {
      isOrganizer: false
    }
    this.OrganizerView = this.OrganizerView.bind(this);
  }
  OrganizerView() {
    if (!this.state.isOrganizer) {
      return <div className='sidebar-menu__title'>
        <span className="sidebar-menu__title__icon">
          <img src={organizer} alt="Organizer icon" className="sidebar-menu__title__icon--icon" />
        </span>
        <button  className="btn primary" onClick={() => { this.setState({ isOrganizer: true }) }} >Стани орзанизатор</button>
      </div>
    } else {
      return (
        <div className="sidebar-menu__title">
          <span className="sidebar-menu__title__icon">
            <img src={organizer} alt="Organizer icon" className="sidebar-menu__title__icon--icon" />
          </span>
          Организатор
          <ul className="sidebar-menu__submenu">
            <li>
              <Link to={'/statistics/organizer/business'}>Данни за фирмата</Link>
            </li>
            <li>
              <Link to={'/statistics/organizer'}>Информация за организатор</Link>
            </li>
            <li>
              <Link to={'/statistics/organizer/siteinvoices'}>Издадени фактури</Link>
            </li>
            <li>
              <Link to={'/statistics/organizer/payment'}>Изискай плащане</Link>
            </li>
            <li>
              <Link to={'/statistics/organizer/pr'}>Добави PR към събития</Link>
            </li>
            <li>
              <Link to={'/statistics/organizer/event'}>Свали четец за проверка на билети</Link>
            </li>
            <li>
              <Link to={'/statistics/organizer/advice'}>Съвети и помощ</Link>
            </li>
            <li>
              <Link to={'/statistics/organizer/users'}>Потребители</Link>
            </li>
          </ul>
        </div>
      )
    }
  }
  render() {
    const { } = this.props;

    return (
      <div className="sidebar-menu">
        <div className="sidebar-menu__title">
          <span className="sidebar-menu__title__icon">
            <img src={avatar} alt="Profile image" className="sidebar-menu__title__icon--image" />
          </span>
          Профил
          <ul className="sidebar-menu__submenu">
            <li>
              <Link to={'/statistics/profile'}>Информация за контакт</Link>
            </li>
            <li>
              <Link to={'/statistics/profile/tickets&invoces'}>Моите билети и фактури</Link>
            </li>
            <li>
              <Link to={'/statistics/news'}>Управлявай новини</Link>
            </li>
          </ul>
        </div>
        {this.OrganizerView()}
        <div className="sidebar-menu__title">
          <span className="sidebar-menu__title__icon">
            <img src={events} alt="Events icon" className="sidebar-menu__title__icon--icon" />
          </span>
          Събития
          <ul className="sidebar-menu__submenu">
            <li>
              <Link to={'/statistics/events'}>Моите събития</Link>
            </li>
            <li className="sidebar-menu__submenu--active">
              <Link to={'/statistics/events/statistic'}>Статистика</Link>
            </li>
            <li>
              <Link to={'/statistics/events/saldo'}>Общо салдо</Link>
            </li>
            <li>
              <Link to={'/statistics/events/promo'}>Промо кодове</Link>
            </li>
            <li>
              <Link to={'/statistics/events/integration'}>Вграждане в сайт</Link>
            </li>
            <li>
              <Link to={'/statistics/events/poll'}>Анкета</Link>
            </li>
            <li>
              <Link to={'/statistics/events/mail'}>Изпращане на мейли</Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu__title">
          <span className="sidebar-menu__title__icon">
            <img src={security} alt="Security icon" className="sidebar-menu__title__icon--icon" />
          </span>
          Сигурност
          <ul className="sidebar-menu__submenu">
            <li>
              <Link to={'/statistics/security/username'}>Смяна на потребителско име</Link>
            </li>
            <li>
              <Link to={'/statistics/security/password&email'}>Смяна на парола и email</Link>
            </li>
            <li>
              <Link to={'/statistics/security/app-pass'}>Смяна на парола за четец</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

SidebarMenu.propTypes = {

};

SidebarMenu.defaultProps = {

};

export default SidebarMenu;