import React, { Component } from 'react';
import logo from '../../images/logo-color.png';

import Menu from '../../components/Menu';
import Social from '../../components/Icon/Social';
import Payment from '../../components/Icon/Payment';

class Navigation extends Component {
  render() {
    return (
      <section className="navigation">
        <div className="container">
          <div className="row m-b-xl">
            <div className="col-xs-12 col-md-3">
              <div className="row">
                <div className="col-xs-12">
                  <div className="navigation__section m-t-xl">
                    <img className="navigation__logo" src={logo} alt="Събитие лого" />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-12">
                  <div className="navigation__section m-t-xl">
                    <h4 className="navigation__section__title m-t-none m-b text-uppercase">
                      Последвайте ни
                    </h4>
                    <Social
                      className="m-r-xs"
                      site="facebook"
                      link="https://www.facebook.com/facebook-profile-page"
                    />
                    <Social
                      font={1.125}
                      site="google-plus"
                      link="https://www.google.com/facebook-profile-page"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-12">
                  <div className="navigation__section m-t-xl">
                    <h4 className="navigation__section__title m-t-none m-b text-uppercase">
                      Методи на плащане
                    </h4>
                    <Payment payment={'mastercard'} />
                    <Payment payment={'visa'} />
                    <Payment payment={'paypal'} className="m-r-none" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <div className="navigation__section m-t-xl">
                <h4 className="navigation__section__title m-t-none m-b text-uppercase">
                  Навигация
                </h4>
                <Menu
                  decoration
                  items={[
                    {
                      label: 'Какво е СЪБИТИЕ.БГ',
                    },
                    {
                      label: 'Цени',
                    },
                    {
                      label: 'Контакти',
                    },
                    {
                      label: 'Условия за ползване',
                    },
                    {
                      label: 'Индивидуални условия',
                    },
                    {
                      label: 'Инструменти',
                    },
                    {
                      label: 'Лични данни',
                    },
                    {
                      label: 'Често задавани въпроси',
                    },
                    {
                      label: 'Блог',
                    },
                  ]}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <div className="navigation__section m-t-xl">
                <h4 className="navigation__section__title m-t-none m-b text-uppercase">
                  Категории
                </h4>
                <Menu
                  decoration
                  items={[
                    {
                      label: 'Курсове и обучение (19)',
                    },
                    {
                      label: 'Спортни (7)',
                    },
                    {
                      label: 'Конференции и семинари (5)',
                    },
                    {
                      label: 'Бизнес (2)',
                    },
                    {
                      label: 'Концерти и музика (1)',
                    },
                  ]}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-3">
              <div className="navigation__section m-t-xl">
                <h4 className="navigation__section__title m-t-none m-b text-uppercase">
                  Градове
                </h4>
                <Menu
                  decoration
                  items={[
                    {
                      label: 'гр. София (31)',
                    },
                    {
                      label: 'гр. Пловдив (2)',
                    },
                    {
                      label: 'гр. Самоков (1)',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Navigation;
