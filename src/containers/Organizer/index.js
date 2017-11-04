import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReadMore from '../../components/ReadMore';
import Editable from '../../components/Editable';

import man from '../../images/man1.png';
import { getEventContactsById } from './actions/';

class Organizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ak_name: '',
      ak_email: '',
      ak_phone: '',
      tk_name: '',
      tk_email: '',
      tk_phone: '',
    };
  }
  componentWillMount() {
    var id=this.props.urlId;//eslint-disable-line
    console.log('CONATCTS');//eslint-disable-line
    getEventContactsById({id:this.props.urlId},(resp)=>{//eslint-disable-line
    console.log('CONATCTS respo');//eslint-disable-line

      const contacts = resp.contacts;

      this.setState({
        ak_name: contacts.akContact.name,
        ak_email: contacts.akContact.email,
        ak_phone: contacts.akContact.phone,

        tk_name: contacts.tkContact.name,
        tk_email: contacts.tkContact.email,
        tk_phone: contacts.tkContact.phone,
      });
    })//eslint-disable-line
  }
  renderField(children, className, block, whatIEdit, urlId) {
    const { editable } = this.props;

    if (editable) {
      return (
        <Editable
          urlId={urlId}
          whatIEdit={whatIEdit}
          type="dark"
          className={className}
          block={block}
        >
          { children }
        </Editable>
      );
    }

    return children;
  }


  render() {
    const { editable } = this.props;
console.log('ORGANIZAER '+this.props.urlId)//eslint-disable-line
const urlId = this.props.urlId//eslint-disable-line
    const description = 'Коучинг Лаб е поредица от срещи, посветени на коучинг инструменти, които могат да се ползват в различни области от коучинг сесията. По време на срещите, участниците получават знания и развиват умения за инструменти и техники, чрез които да обогатят личната си коучинг практика и да направят коучинг сесиите си по-задълбочени. Коучинг Лаб е поредица от срещи, посветени на коучинг инструменти, които могат да се ползват в различни области от коучинг сесията. По време на срещите, участниците получават знания и развиват умения за инструменти и техники, чрез които да обогатят личната си коучинг практика и да направят коучинг сесиите си по-задълбочени';

    return (
      <div className="organizer">
        <div className="organizer__box">
          <div className="organizer__image" style={{ backgroundImage: `url('${man}')` }} />
          <div className="organizer__info">
            <h2 className="organizer__info__title">{ this.renderField('Михаил Господинов') }</h2>
            <h2 className="organizer__info__position">
              { this.renderField('Финансов консултант') }
            </h2>
            { editable ? (
              this.renderField(description, 'organizer__info__description', true, 'organizer__info__description')
            ) : (
              <ReadMore maxChars={420} wordBreak className="organizer__info__description">
                { description }
              </ReadMore>
            )}
            <p className="organizer__info__contacts organizer__info__contacts--first">
              <i className="fa fa-phone" />+359 88 888 888
            </p>
            <p className="organizer__info__contacts">
              <i className="fa fa-envelope" />{ this.renderField('IvanIvanov@test.bg', null, null, 'organizer__info_email') }
            </p>
          </div>
          <div className="clearfix" />
        </div>
        <div className="organizer__box organizer__contact m-t-md">
          <h3 className="organizer__contact__title">Административен контакт</h3>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <span className="organizer__contact__info">{ this.renderField(this.state.ak_name || 'Зареждане...', true, null, 'ak_name', urlId) }</span>
            </div>
            <div className="col-xs-12 col-md-4">
              <span className="organizer__contact__info">{ this.renderField(this.state.ak_phone || 'Зареждане...', true, null, 'ak_phone', urlId) }</span>
            </div>
            <div className="col-xs-12 col-md-4">
              <span className="organizer__contact__info">{ this.renderField(this.state.ak_email || 'Зареждане...', true, null, 'ak_email', urlId) }</span>
            </div>
          </div>
        </div>
        <div className="organizer__box organizer__contact m-t-md">
          <h3 className="organizer__contact__title">Търговски контакт</h3>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <span className="organizer__contact__info">{ this.renderField(this.state.tk_name || 'Зареждане...', true, null, 'tk_name', urlId) }</span>
            </div>
            <div className="col-xs-12 col-md-4">
              <span className="organizer__contact__info">{ this.renderField(this.state.tk_phone || 'Зареждане...', true, null, 'tk_phone', urlId) }</span>
            </div>
            <div className="col-xs-12 col-md-4">
              <span className="organizer__contact__info">{ this.renderField(this.state.tk_email || 'Зареждане...', true, null, 'tk_email', urlId) }</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Organizer.propTypes = {
  editable: PropTypes.bool,
};

Organizer.defaultProps = {
  editable: false,
};

export default Organizer;
