import React, { Component } from 'react';
import logo from './images/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-sm-push-8">
              <a
                href="http://www.inteleksys.eu/"
                target="_blank"
                rel="noopener noreferrer"
                title="Intelesys уебсайт"
              >
                <img id="footer_logo" src={logo} alt="Intelesys" />
              </a>
            </div>
            <div className="col-xs-12 col-sm-8 col-sm-pull-4">
              <p id="footer_credits">© 2011-2017 Sabitie.bg. Всички права запазени.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
