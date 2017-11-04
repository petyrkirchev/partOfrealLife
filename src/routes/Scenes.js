import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../scenes/Home';
import CreateEventStepOne from '../scenes/CreateEvent/StepOne';
import CreateEventStepTwo from '../scenes/CreateEvent/StepTwo';
import CreateEventStepThree from '../scenes/CreateEvent/StepThree';
import CreateEventStepFour from '../scenes/CreateEvent/StepFour';
import EditEventByOrganizator from '../scenes/EditEvent/';
import Blog from '../scenes/Blog/Posts';
import BlogPost from '../scenes/Blog/SinglePost';
import Statistics from '../scenes/BackSite/Statistics';
import Registration from '../scenes/Registration/Registration';
import TermsAndConditions from '../scenes/Terms&Conditions/TermsAndConditions';

import BuyTickets from '../containers/BuyTickets/index';
import DataForBuy from '../containers/DataForBuy/index';
import PlaceSelector from '../containers/PlaceSelector/index';
import Poll from '../containers/Poll/index';
import SuccessfulPurchase from '../containers/SuccessfulPurchase/index';
import SearchView from '../scenes/search/SearchView';
import ContactUs from '../containers/ContactUs/index';
import routes from './';

class Scenes extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path={routes.getRoute('home')} component={Home} />
          <Route exact path={'/events/:id'} component={CreateEventStepFour} />
          <Route exact path={routes.getRoute('stepOne')} component={CreateEventStepOne} />
          <Route exact path={routes.getRoute('stepTwo')} component={CreateEventStepTwo} />
          <Route exact path={routes.getRoute('step3')} component={CreateEventStepThree} />
          <Route exact path={routes.getRoute('step4')} component={CreateEventStepFour} />
          <Route exact path={routes.getRoute('search')} component={SearchView} />
          <Route exact path={routes.getRoute('organizatorEvent')} component={EditEventByOrganizator} />
          <Route exact path={routes.getRoute('blog')} component={Blog} />
          <Route exact path={routes.getRoute('blogPost')} component={BlogPost} />
          <Route path={routes.getRoute('statistics')} component={Statistics} />
          <Route exact path={routes.getRoute('registration')} component={Registration} />
          <Route exact path={routes.getRoute('termsAndConditions')} component={TermsAndConditions} />
          <Route exact path={routes.getRoute('buyTickets')} component={BuyTickets} />
          <Route exact path={routes.getRoute('dataForBuy')} component={DataForBuy} />
          <Route exact path={routes.getRoute('placeSelector')} component={PlaceSelector} />
          <Route exact path={routes.getRoute('poll')} component={Poll} />
          <Route exact path={routes.getRoute('successfulPurchase')} component={SuccessfulPurchase} />
          <Route path={routes.getRoute('contactUs')} component={ContactUs} />
        </Switch>
      </Router>
    );
  }
}

export default Scenes;
