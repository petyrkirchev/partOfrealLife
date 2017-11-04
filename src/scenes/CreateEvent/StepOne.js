import React, { Component } from 'react';

import Header from '../../containers/Header';
import Breadcrumbs from '../../containers/Breadcrumbs/index';
import Navigation from '../../containers/Navigation';
import Footer from '../../containers/Footer';

import PersonData from '../../containers/Form/PersonData';
import CompanyData from '../../containers/Form/CompanyData';

import Steps from '../../components/Steps/index';
import Tabs from '../../components/Tabs';

class CreateEventStepOne extends Component {
  constructor() {
    super();

    this.state = {
      type: 'personData',
    };

    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount() {
    if (!sessionStorage.getItem('username')) {
      this.props.history.push('/');//eslint-disable-line
      setTimeout(() => {
        document.getElementById('modal').click();

      }, 1000);//eslint-disable-line
    }
  }

  onSelect(type) {
    this.setState({
      type,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Breadcrumbs path={{
          1: {
            label: 'Начало',
          },
          2: {
            label: 'Създай събитие',
          },
          3: {
            label: 'Данни за организатора',
          },
        }}
        />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Steps
                active={1}
                steps={{
                  1: {
                    name: 'Стъпка 1',
                    label: 'Фирма',
                    desc: 'Данни за организатора',
                  },
                  2: {
                    name: 'Стъпка 2',
                    label: 'Информация',
                    desc: 'за събитието',
                  },
                  3: {
                    name: 'Стъпка 3',
                    label: 'Опции',
                    desc: 'от Иван Иванов',
                  },
                  4: {
                    name: 'Стъпка 4',
                    label: 'Финализиране',
                    desc: 'от Иван Иванов',
                  },
                }}
              />
            </div>
          </div>
          <div className="row m-t m-b">
            <div className="col-xs-12" style={{ textAlign: 'center' }}>
              <Tabs
                width={200}
                centered
                selected="personData"
                onSelect={(type) => { this.onSelect(type); }}
                tabs={{
                  personData: {
                    label: 'Физическо лице',
                  },
                  companyData: {
                    label: 'Юридическо лице',
                  },
                }}
              />
            </div>
          </div>
          { this.state.type === 'personData' && <PersonData /> }
          { this.state.type === 'companyData' && <CompanyData /> }
        </div>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default CreateEventStepOne;
