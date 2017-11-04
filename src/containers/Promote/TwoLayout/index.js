import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../routes';

import Button from '../../../components/Button/index';

import registerForNewsletter from '../../../images/register-for-newsletter.jpg';
import becomeAnOrganizer from '../../../images/become-an-organizer.jpg';

class PromoteTwoLayout extends Component {
  render() {
    return (
      <section className="promote promote-two__layout">
        <div
          className="promote__section promote__section--left"
          style={{ backgroundImage: `url('${registerForNewsletter}')` }}
        >
          <div className="promote__section__content">
            <h2 className="promote__section__title">
              Регистрирай се
              <span className="promote__section__slogan">за нашия информационен<br />бюлетин</span>
            </h2>
            <p className="promote__section__description">
              Коучинг Лаб е поредица от срещи, посветени на коучинг инструменти,
              които могат да се ползват в различни области от коучинг сесията.
              По време на срещите, участниците получават знания и развиват
              умения за инструменти и техники.
            </p>
            <Button
              width={180}
              size="md"
              type="warning"
              mode="reversed"
              className="promote__section__button"
            >
              Регистрирай се
            </Button>
          </div>
        </div>
        <div
          className="promote__section promote__section--right"
          style={{ backgroundImage: `url('${becomeAnOrganizer}')` }}
        >
          <div className="promote__section__content">
            <h2 className="promote__section__title">
              Стани организатор
              <span className="promote__section__slogan">и менажирай своите<br />събития</span>
            </h2>
            <p className="promote__section__description">
              Коучинг Лаб е поредица от срещи, посветени на коучинг инструменти,
              които могат да се ползват в различни области от коучинг сесията.
              По време на срещите, участниците получават знания и развиват
              умения за инструменти и техники.
            </p>
            <Link to={routes.getRoute('stepOne')}>
              <Button
                width={180}
                size="md"
                type="warning"
                className="promote__section__button"
              >
                Създай събитие
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default PromoteTwoLayout;

