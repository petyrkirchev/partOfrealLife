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
import TabNavigation from '../../components/TabNavigation';

// import EventProgram from './StepTwo/EventProgram';
import EventTickets from './StepTwo/EventTickets';
import EventOrganizer from './StepTwo/EventOrganizer';
import EventDescription from './StepTwo/EventDescription';
import EventAdditional from './StepTwo/EventAdditional';

import simpleEvent from '../../data/simpleEvent.json';
import { getEventById } from './StepTwo/actions/';

class CreateEventStepFour extends Component {
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
      self.setState({
        description: event.eventId.description,
        slogan: event.eventId.slogan,
        title: event.eventId.title,
      });
    });
      });

    }// eslint-disable-line
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
        <Poster {...event} urlId={urlId} />
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
          <EventOrganizer editable={false} urlId={urlId} />
        </div>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

CreateEventStepFour.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default withRouter(CreateEventStepFour);
