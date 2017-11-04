import React, { Component } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import Scenes from './routes/Scenes';
import './styles.css';

class App extends Component {
  componentWillMount() {
    // TODO: Get locale string from some config
    moment.locale('bg');
  }

  render() {
    return (
      <div className="main">
        <Scenes />
      </div>
    );
  }
}

export default App;
