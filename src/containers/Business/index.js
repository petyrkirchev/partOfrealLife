/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/index';
import PersonData from '../Form/PersonData/';
import CompanyData from '../Form/CompanyData';
import Navigation from '../../containers/Navigation/';
import Footer from '../../containers/Footer/';
import PropTypes from 'prop-types';

import routes from '../../routes';

import Input from '../../components/Form/Input/';
import FormGroup from '../../components/Form/Widgets/FormGroup';
import Checkbox from '../../components/Form/Checkbox';
import Button from '../../components/Button';
import { createOrganizator } from './Actions';

class Business extends Component {
    constructor() {
        super();
        this.state = {
            event: {
                companyName: '',
                companyOrganizer: '',
                companyNumber: '',
                companyCityOfRegistration: '',
                companyTaxNumber: false,
                companyTaxDocumentation: '',
                companyAddressOfRegistration: '',
                companyPhone: '',
                companyBankAccount: '',
                changeInvoiceNumber: false,
                invoiceNumber: '',
                acceptTermsAndConditions: false,
            },
            err: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }
    handleSuccess(data) {
      if(!data.success) {
        this.setState({err: data.err})
      } else {
        this.setState({err: 'Success'})
      }
    }
    handleReject(err) {
      this.setState({err: err})
    }
    handleChange(e) { //eslint-disable-line
        const event = this.state.event;
        const prop = e.target.id;
        const value = e.target.value;
        event[prop] = value;
        this.setState({ event }, function () {
          console.log(this.state.event)
        });
    }
    handleCheck(e) {
        const event = this.state.event;
        const prop = e.target.id;
        event[prop] = !event[prop];
        this.setState({ event });
    }
    handleClick() {
        console.log(this.state.event); //eslint-disable-line
        var organizator = this.state.event;
        organizator.username = window.sessionStorage.getItem('username');
        createOrganizator(organizator, this.handleSuccess, this.handleReject);
    }

    render() {
            const errStyle = {color: 'red'};
            const { inputSize } = this.props;
        return (<div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <Input
                            id="companyName"
                            placeholder="Име на фирмата"
                            hint="aaa"
                            size={inputSize}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <Input
                            id="companyOrganizer"
                            placeholder="М.О.Л. / Трите имена"
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
                            id="companyNumber"
                            placeholder="ЕИК"
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
                                id="companyTaxDocumentation"
                                className="m-b-xxs"
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
                            options={['+359', '+01']}
                            size={inputSize}
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
                            <Button
                                onClick={this.handleClick}
                                className="pull-right"
                                width={160}
                                type="warning"
                                size="md"
                            >
                                Запис
              </Button>
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
                    </div>
            <Navigation />
            <Footer />
            <p style={errStyle} >{this.state.err}</p>
        </div>
        );
    }
}

export default Business;

