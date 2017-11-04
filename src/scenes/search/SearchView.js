import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../containers/Slider';
import EventThumb from '../../containers/Event/Thumb';

import Header from '../../containers/Header';
import Button from '../../components/Button/index';
import Navigation from '../../containers/Navigation';
import Footer from '../../containers/Footer';
import Loader from '../../components/Loader';

import events from '../../data/events.json';
import { getEventByTitle } from './actions/';

class SearchView extends Component {
  constructor() {
    super();

    this.state = {
      eventType: 'recommended',
      loadingEvents: false,
      events: [],
    };
  }
  componentWillMount() {
    getEventByTitle({
      searchBy: 'title',
      loadingEvents: true,
      title: this.props.match.params.id//eslint-disable-line
    }, (resp) => {
      console.log(resp);//eslint-disable-line
      this.setState({
        events: resp.message,
        loadingEvents: false,
      });
    });
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Header transparent fixed />
        <Slider events={events.slice(0, 4)} />
        <div className="container">
          <div className="row m-t-xl">
            {this.state.loadingEvents && <div>Loading...</div>}
            {!this.state.loadingEvents &&
            this.state.events.length === 0 && <div>Empty result list</div>}
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
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default SearchView;
