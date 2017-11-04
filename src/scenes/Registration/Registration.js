import React, { Component } from 'react';
import Header from '../../containers/Header/index';
import Register from '../../containers/Register/index';
import Footer from '../../containers/Footer/index';

class Registration extends Component {
  render() {
    return (
      <div>
        <Header />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default Registration;
