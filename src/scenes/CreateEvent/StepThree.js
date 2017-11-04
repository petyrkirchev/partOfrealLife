import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import routes from '../../routes';
import Header from '../../containers/Header';
import Breadcrumbs from '../../containers/Breadcrumbs';
import Navigation from '../../containers/Navigation';
import Footer from '../../containers/Footer';

import Steps from '../../components/Steps/index';
import ButtonNavigation from '../../components/Button/Navigation';
import EventAdditionalInfo from './StepThree/EventAdditionalInfo';
import EventFbPixelGAnalytics from './StepThree/EventFbPixelGAnalytics';
import EventBadgeField from './StepThree/EventBadgeField';
import Poll from './StepThree/Poll/Poll';
import EventCategory from './StepThree/EventCategory';
import EventVisibility from './StepThree/EventVisibility';
import EventInvoice from './StepThree/EventInvoice';
import EventTelephone from './StepThree/EventTelephone';
import EventOrganizerNotification from './StepThree/EventOrganizerNotification';
import EventAdditionalOptions from './StepThree/EventAdditionalOptions';

import EventPr from './StepThree/EventAddPr/EventPr';


class CreateEventStepThree extends Component {
  constructor() {
    super();
    this.state = {
      additionalInfo: null,
      fbPixel: null,
      gAnalitics: null,
      discount: null,
      discountPorc: null,
      freeConsult: null,
      passBackstage: null,
      meetLectors: null,
      specialSit: null,
      category: null,
      subCategory: null,
      prName: null,
      visibility: null,
      collectInvoiceData: null,
      collectInvoiceDataChoice: null,
      telephone: null,
      additionalShowRemainingTickets: null,
      additionalShowParticipantList: null,
      additionalShowSocial: null,
      organizerNotification: null,
      eventid: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
  }
   componentWillMount() {// eslint-disable-line
      var urlId=this.props.match.params.id;// eslint-disable-line
     this.setState({
       eventId: urlId,
     });
   }
  componentDidMount() {
    if (!sessionStorage.getItem('username')) {
      this.props.history.push('/');//eslint-disable-line
      setTimeout(() => {
        document.getElementById('modal').click();

      }, 1000);//eslint-disable-line
    }
  }
  handleClick() {
    const data = Object.assign({}, this.state);
    return data;
  }
  handleChangeState(e) {
    if (!e.target.value) {
      this.setState({ [e.target.name]: e.target.checked });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }
  render() {
    const { history } = this.props;
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
                onClick={() => { history.push(routes.getRoute('stepTwo')); }}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-8">
              <Steps
                active={3}
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
                onClick={() => { history.push(`/create-event/step-four/${this.state.eventId}`); }}
              />
            </div>
          </div>
        </div>
        <ListGroup>
          <ListGroupItem>
            <EventAdditionalInfo onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <EventFbPixelGAnalytics onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <EventBadgeField onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <Poll poll={this.state.poll} data={this.state.data} getPoll={this.getPoll} />
          </ListGroupItem>
          <ListGroupItem>
            <EventCategory category={this.state.category} onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <EventVisibility onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <EventInvoice onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <EventPr prName={this.state.prName} onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <EventTelephone onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <EventAdditionalOptions onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <EventOrganizerNotification onChange={this.handleChangeState} />
          </ListGroupItem>
          <ListGroupItem>
            <Link to="step-four">
              <Button
                bsSize={'large'}
                className="pull-right"
                name="continue"
                onClick={this.handleClick}
              >
            Продължи
          </Button>
            </Link>
          </ListGroupItem>
        </ListGroup>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

CreateEventStepThree.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default withRouter(CreateEventStepThree);

