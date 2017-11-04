import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../containers/Header';
import Slider from '../containers/Slider';
import Search from '../containers/Search';
import EventKeynote from '../containers/Event/Keynote';
import Tabs from '../components/Tabs';
import Button from '../components/Button/index';
import EventThumb from '../containers/Event/Thumb';
import Navigation from '../containers/Navigation';
import Promote from '../containers/Promote/TwoLayout';
import Footer from '../containers/Footer';
import Loader from '../components/Loader';

import events from '../data/events.json';
import { getEvents } from './actions/';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      eventType: 'recommended',
      loadingEvents: false,
      events: [],
    };

    this.loadMoreEvents = this.loadMoreEvents.bind(this);
  }
  componentDidMount() {
    getEvents({ count: 0 }, (resp) => {
      this.setState({
        events: resp.events,
      });
    });
  }

  loadMoreEvents() {
    this.setState({
      loadingEvents: true,
    });

    setTimeout(() => {
      this.setState({
        loadingEvents: false,
      });
    }, 4000);
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header transparent fixed />
        <Slider events={events.slice(0, 4)} />
        <Search />
        <div className="container">
          <div className="row m-t-xl" />
          <div className="row m-t-xl" />
          <div className="row m-t-lg" />
          <div className="row">
            <div className="col-xs-12">
              <EventKeynote {...events[0]} className="" />
            </div>
          </div>
          <div className="row m-t-xl">&nbsp;</div>
          <div className="row m-t-xl">
            <div className="col-xs-12">
              <Tabs
                width={180}
                type="warning"
                direction={window.innerWidth < 414 ? 'vertical' : 'horizontal'}
                fontSize={0.875}
                onSelect={key => this.setState({ eventType: key })}
                selected={this.state.eventType}
                tabs={{
                  recommended: {
                    label: 'Препоръчани',
                  },
                  closest: {
                    label: 'Най-близка дата',
                  },
                }}
                centered
              />
            </div>
          </div>
          <div className="row m-t-xl">
            { this.state.events.map(event => (
              <Link to={`/events/${event.id}`}>
                <div key={event.id} className="col-xs-12 col-sm-6 col-md-3">
                  <EventThumb
                    {...event}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="row m-t-xl">
            <div className="col-xs-12">
              { this.state.loadingEvents ? <Loader center /> : (
                <Button width={200} center size="md" mode="bordered" onClick={this.loadMoreEvents}>
                  Покажи още събития
                </Button>
              )}
            </div>
          </div>
          <div className="row m-t-xl">&nbsp;</div>
          <div className="row m-t-xl">&nbsp;</div>
        </div>
        <Promote />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default Home;
