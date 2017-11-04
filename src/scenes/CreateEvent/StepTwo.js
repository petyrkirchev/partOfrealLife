import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import routes from '../../routes';

import { scrollToSection } from '../../utils';

import Header from '../../containers/Header';
import Breadcrumbs from '../../containers/Breadcrumbs';
import Poster from '../../containers/Poster';
import Navigation from '../../containers/Navigation';
import Footer from '../../containers/Footer';

import Fixed from '../../components/Fixed';
import Steps from '../../components/Steps/index';
import ButtonNavigation from '../../components/Button/Navigation';
import TabNavigation from '../../components/TabNavigation';

// import EventProgram from './StepTwo/EventProgram';
import EventTickets from './StepTwo/EventTickets';
import EventOrganizer from './StepTwo/EventOrganizer';
import EventDescription from './StepTwo/EventDescription';
import EventAdditional from './StepTwo/EventAdditional';

import simpleEvent from '../../data/simpleEvent.json';
import { getEventById } from './StepTwo/actions/';

class CreateEventStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      slogan: '',
      title: '',
    };
  }
    componentWillMount() {// eslint-disable-line
      var urlId=this.props.match.params.id;// eslint-disable-line

      const self = this;
      self.setState({
        description: '',
        slogan: '',
        title: '',
        eventId: urlId,
      }, () => {
    getEventById({id:this.props.match.params.id},(event) => {  // eslint-disable-line
      console.log(event) // eslint-disable-line
      self.setState({
        description: event.eventId.description,
        slogan: event.eventId.slogan,
        title: event.eventId.title,
      });
    });
      });

    }// eslint-disable-line
  componentDidMount() {
    if (!sessionStorage.getItem('username')) {
      this.props.history.push('/');//eslint-disable-line
      setTimeout(() => {
        document.getElementById('modal').click();

      }, 1000);//eslint-disable-line
    }
  }
  render() {
    const { history } = this.props;
var event = { ...simpleEvent, slogan: this.state.slogan, description: this.state.description, title: this.state.title };// eslint-disable-line
const urlId=this.props.match.params.id;// eslint-disable-line
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
          <div className="row" style={{ height: 160 }}>
            <div className="col-xs-12 col-sm-3 col-md-2 center-content">
              <ButtonNavigation
                type="prev"
                center
                onClick={() => { history.push(routes.getRoute('stepOne')); }}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8">
              <Steps
                active={2}
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
            <div className="col-xs-12 col-sm-3 col-md-2 center-content">
              <ButtonNavigation
                type="next"
                center
                onClick={() => { history.push(`/create-event/step-three/${this.state.eventId}`); }}
              />
            </div>
          </div>
        </div>
        <Poster {...event} urlId={urlId} editable />
        <Fixed background="#ffffff">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 m-t-sm">
                <TabNavigation
                  tabs={[
                    {
                      label: 'Описание',
                      onClick: () => { scrollToSection('#event-description'); },
                    },
                    {
                      label: 'Програма',
                    },
                    {
                      label: 'Водещи',
                    },
                    {
                      label: 'Цени',
                      onClick: () => { scrollToSection('#event-tickets'); },
                    },
                    {
                      label: 'Локация',
                      onClick: () => { scrollToSection('#event-additional'); },
                    },
                    {
                      label: 'За организатора',
                      onClick: () => { scrollToSection('#event-organizer'); },
                    },
                    {
                      label: 'Статии и препоръки',
                      onClick: () => { history.push(routes.getRoute('blog')); },
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </Fixed>
        <div id="event-description">
          <EventDescription />
        </div>
        <div id="event-tickets">
          <EventTickets />
        </div>
        <div id="event-additional">
          <EventAdditional />
        </div>
        <div id="event-organizer">
          <EventOrganizer urlId={urlId} />
        </div>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

CreateEventStepTwo.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default withRouter(CreateEventStepTwo);
