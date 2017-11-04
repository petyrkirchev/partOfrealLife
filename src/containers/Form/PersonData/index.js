import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from '../../../components/Form/Input';
import FormGroup from '../../../components/Form/Widgets/FormGroup';
import Checkbox from '../../../components/Form/Checkbox';
import Button from '../../../components/Button';
import { createEOrganizator } from './actions/';

class PersonData extends Component {
  constructor() {
    super();
    this.state = {
      event: {
        companyName: '',
        personId: '',
        personId1: '',
        companyCityOfRegistration: '',
        companyTaxNumber: false,
        companyTaxDocumentation: '',
        companyAddressOfRegistration: '',
        companyPhone: '',
        companyBankAccount: '',
        changeInvoiceNumber: false,
        invoiceNumber: '',
        administrativeNames: '',
        administrativeEmail: '',
        administrativePhone: '',
        marketingNames: '',
        marketingEmail: '',
        marketingPhone: '',
        acceptTermsAndConditions: false,
      },
      eventId: '',
      err: '',
      notOrg: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) { //eslint-disable-line
    const event = this.state.event;
    const prop = e.target.id;
    const value = e.target.value;
    event[prop] = value;

    this.setState({ event, err: '' });
  }
  handleCheck(e) { //eslint-disable-line
    const event = this.state.event;
    const prop = e.target.id;
    event[prop] = !event[prop];
    this.setState({ event, err: '' });
  }
  handleClick() {
    this.setState({
      notOrg: false,
    });
    const self = this;
    createEOrganizator(this.state.event, (success) => {
      if (success.success) {
        sessionStorage.setItem('eventId', success.message.eventId);
        self.setState({
          eventId: success.message.eventId,
          err: '',
        }, () => {
          document.getElementById('next').click();
        });
      } else {
        if (success.err) {
          this.setState({
            notOrg: true,
          });
        }
        this.setState({
          err: success.fail || success.err,
        });
      }
    }, (data) => {
      console.log(data);//eslint-disable-line
    });
  }

  render() {
    const { inputSize } = this.props;
    const errStyle = {
      color: 'red',
    };
    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Input
              id="companyName"
              placeholder="Име на компанията"
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <Input
              id="personId"
              placeholder="ЕГН"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Input
              id="personId1"
              placeholder="ЕГН"
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <Input
              id="companyCityOfRegistration"
              placeholder="Град"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <FormGroup>
              <Checkbox
                id="companyTaxNumber"
                label="Регистрация по ЗДДС"
                checked={this.state.companyTaxNumber}
                onChange={this.handleCheck}
              />
              <Input
                className="m-b-xxs"
                id="companyTaxDocumentation"
                placeholder="Основание за неначисляване на ДДС"
                required
                hint="aaa"
                size={inputSize}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Input
              id="companyAddressOfRegistration"
              placeholder="Адрес"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
            <Input
              id="companyPhone"
              placeholder="Телефон"
              required
              hint="aaa"
              size={inputSize}
              options={['+359', '+01']}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <Input
              id="companyBankAccount"
              placeholder="Банкова сметка"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
            <p className="text--warning">Полетата със * са задължителни</p>
          </div>
          <div className="col-xs-12 col-sm-6">
            <FormGroup important>
              <Checkbox
                type="light"
                id="changeInvoiceNumber"
                label="Желая да променя номер на начална фактура"
                checked={this.state.changeInvoiceNumber}
                onChange={this.handleCheck}
              />
              <Input
                id="invoiceNumber"
                placeholder="Начална фактура"
                required
                hint="aaa"
                size={inputSize}
                onChange={this.handleChange}
              />
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="text--default text--uppercase m-b-sm">
              Административен контакт
            </p>
          </div>
          <div className="col-xs-12 col-sm-4">
            <Input
              id="administrativeNames"
              placeholder="Име и фамилия"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-xs-12 col-sm-4">
            <Input
              id="administrativeEmail"
              placeholder="Електронна поща"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-xs-12 col-sm-4">
            <Input
              id="administrativePhone"
              placeholder="Телефон"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p className="text--default text--uppercase m-b-sm">
              Търговски контакт
            </p>
          </div>
          <div className="col-xs-12 col-sm-4">
            <Input
              id="marketingNames"
              placeholder="Име и фамилия"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-xs-12 col-sm-4">
            <Input
              id="marketingEmail"
              placeholder="Електронна поща"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-xs-12 col-sm-4">
            <Input
              id="marketingPhone"
              placeholder="Телефон"
              required
              hint="aaa"
              size={inputSize}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Button
              onClick={this.handleClick}
              className="pull-right"
              width={160}
              type="warning"
              size="md"
            >
                Продължи
            </Button>
            {this.state.notOrg && <Link to={'/statistics/organizer/business'}><Button>Стани организатор</Button></Link>}
            <Link to={`/create-event/step-two/${this.state.eventId}`} >
              <button id="next" />
            </Link>
            <div>
              <Checkbox
                type="dark"
                id="acceptTermsAndConditions"
                className="pull-right m-r-xl"
                height={50}
                label="Съгласен съм с условията на сайта"
                checked={this.state.acceptTermsAndConditions}
                onChange={this.handleCheck}
              />
            </div>
            <p style={errStyle} >{this.state.err}</p>
          </div>
        </div>
      </div>
    );
  }
}

PersonData.propTypes = {
  inputSize: PropTypes.oneOf(['md', 'lg', 'xl']),
};

PersonData.defaultProps = {
  inputSize: 'xl',
};

export default PersonData;
