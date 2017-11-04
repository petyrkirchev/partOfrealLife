import React, { Component } from 'react';

// import Button from '../../../components/Button/index';

import becomeAnOrganizer from '../../../images/become-an-organizer.jpg';

class PromoteOneLayout extends Component {
  render() {
    return (
      <section className="promote promote-one__layout">
        <div
          className="promote__section"
          style={{ backgroundImage: `url('${becomeAnOrganizer}')` }}
        >
          <div className="promote__section__content">
            <div className="promote__section__content__wrapper">
              <h2 className="promote__section__title">
                Стани организатор
                <span className="promote__section__slogan">и менажирай своите събития</span>
              </h2>
              <p className="promote__section__description">
                Коучинг Лаб е поредица от срещи, посветени на коучинг инструменти,
                които могат да се ползват в различни области от коучинг сесията.
                По време на срещите, участниците получават знания и развиват
                умения за инструменти и техники.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PromoteOneLayout;

