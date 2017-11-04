import React, { Component } from 'react';
import Header from '../../containers/Header/index';
import TermsAndCondition from '../../containers/Terms&Condition/index';
import Footer from '../../containers/Footer/index';

class TermsAndConditions extends Component {

  render() {
    return (
      <div>
        <Header />
        <TermsAndCondition />
        <Footer />
      </div>
    );
  }
}

export default TermsAndConditions;
