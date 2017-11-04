import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, FormControl, Panel } from 'react-bootstrap';
import { createUser } from './Actions/index';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        username: '',
        names: '',
        email: '',
        phone: '',
        password: '',
        repeatPassword: '',
        agreements: false,
      },
      err: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }
  handleSuccess(user) { //eslint-disable-line
    if (!user.success) {
      this.setState({ err: 'Problem with register please contact with customer support' });
    } else {
      document.getElementById('logo').click();
    }
  }
  handleReject(err) { //eslint-disable-line
    this.setState({ err });
  }
  handleChange(event) { //eslint-disable-line
    const newUser = this.state.newUser;
    const prop = event.target.name;
    const value = event.target.value;
    if (prop === 'agreements') {
      newUser[prop] = !newUser[prop];
    } else {
      newUser[prop] = value;
    }
    this.setState({ newUser, err: '' });
  }
  handleClick() { //eslint-disable-line
    const user = this.state.newUser;
    let isEmpty = false;
    for (let prop in user) {//eslint-disable-line
      if (prop !== 'agreements' && !user[prop]) {
        isEmpty = true;
      }
    }
    if (isEmpty) {
      this.setState({ err: 'Please fill in all required fields' });
    } else if (user.password !== user.repeatPassword) {
      this.setState({ err: 'Passwords does not match' });
    } else if (!user.agreements) {
      this.setState({ err: 'Please agree with terms' });
    } else {
      createUser(JSON.stringify(user), this.handleSuccess, this.handleReject);
    }
  }

  render() {
    const errStyle = {
      color: 'red',
    };
    return (
      <Panel>
        <Col lg={4} />
        <Col lg={4}>
          <div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">Form Register</div>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label htmlFor="username" className="control-label">Username *</label>
                  <FormControl
                    type="text"
                    name="username"
                    required="required"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="names" className="control-label">Names *</label>
                  <FormControl
                    type="text"
                    name="names"
                    required="required"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="email" className="control-label">Email *</label>
                  <FormControl
                    type="text"
                    name="email"
                    required="required"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="phone" className="control-label">Phone *</label>
                  <FormControl
                    type="text"
                    name="phone"
                    required="required"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password" className="control-label">Password *</label>
                  <FormControl
                    id="id-password"
                    type="password"
                    name="password"
                    required="required"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="repeatPassword"
                    className="control-label"
                  >Repeat password *
                  </label>
                  <FormControl
                    id="id-repeat-password"
                    type="password"
                    name="repeatPassword"
                    required="required"
                    className="form-control"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="required">* Required fields
                <span className="pull-right" style={errStyle}> {this.state.err}</span>
                </div>
              </div>
              <div className="panel-footer">
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="checkbox c-checkbox">
                      <label htmlFor="agreements">
                        <input
                          type="checkbox"
                          name="agreements"
                          required="required"
                          data-parsley-error-message="Please read and agree the terms"
                          onChange={this.handleChange}
                        />
                        <span>I agree with the </span>
                        <Link to="terms-and-conditions">   terms</Link>
                      </label>
                    </div>
                  </div>
                  <div className="pull-right">
                    <button
                      onClick={this.handleClick}
                      type="submit"
                      className="btn btn-primary"
                    >
                    Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} />
      </Panel>
    );
  }
}

export default Register;
