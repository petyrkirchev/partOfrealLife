/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import routes from '../routes';
import { scrollToSection } from '../utils';

import Fixed from '../components/Fixed';
import Header from '../containers/Header';
import Poster from '../containers/Poster';
import TabNavigation from '../components/TabNavigation';
import Navigation from '../containers/Navigation';
import Footer from '../containers/Footer';

import EventDescription from '../scenes/CreateEvent/StepTwo/EventDescription';
import EventTickets from '../scenes/CreateEvent/StepTwo/EventTickets';
import EventAdditional from '../scenes/CreateEvent/StepTwo/EventAdditional';
import EventOrganizer from '../scenes/CreateEvent/StepTwo/EventOrganizer';

import Promote from '../containers/Promote/OneLayout';

import events from '../data/events.json';

class Event extends Component {
  constructor() {
    super();

    this.state = {
      active: 0,
    };
  }

  componentDidMount() {
    if (this.props.match.params.topic) {
      this.setState({
        active: this.props.match.params.topic,
      });
    }
  }

  render() {
    const { history } = this.props;
    const event = events.filter(event => event.id === this.props.match.params.id)[0];

    return (
      <div style={{ height: '100%' }}>
        <Header fixed transparent />
        <Poster {...event} />
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
          <EventOrganizer />
        </div>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

Event.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default withRouter(Event);
