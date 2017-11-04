import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel, Col, FormControl, Modal } from 'react-bootstrap';
import ForgottenPassword from '../ForgottenPassword/index';
import { loginUser } from './Actions/index';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      showForgotPassword: false,
      user: {
        username: '',
        password: '',
      },
      err: '',
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }
  handleChange(event) { //eslint-disable-line
    const user = this.state.user;
    const prop = event.target.name;
    const value = event.target.value;
    user[prop] = value;

    this.setState({ user, err: '' });
  }
  handleSuccess(user) { //eslint-disable-line
    if (user.token !== undefined) {
      sessionStorage.setItem('username', this.state.user.username);
      this.props.closeModal(); //eslint-disable-line
    } else {
      this.setState({ err: 'Invalid username or password' });
    }
  }
  handleReject() { //eslint-disable-line
    this.setState({ err: 'Fail login' });
  }
  handleClick() { //eslint-disable-line
    loginUser(JSON.stringify(this.state.user), this.handleSuccess, this.handleReject);
  }
  open() {
    this.setState({ showForgotPassword: true });
  }

  close() {
    this.setState({ showForgotPassword: false });
  }
  render() {
    const errStyle = {
      color: 'red',
    };
    return (
      <div>
        <Panel>
          <Col lg={15}>
            <div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">Login</div>
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
                    <label htmlFor="password" className="control-label">Password *</label>
                    <FormControl
                      type="password"
                      name="password"
                      required="required"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="required">* Required fields</div>
                  <Link to="/account-register" >Registration</Link>
                  <div>
                    <a role="button">
                      <span role="presentation" onClick={this.open}>Forgot password?</span>
                      <Modal show={this.state.showForgotPassword} onHide={this.close}>
                        <ForgottenPassword />
                      </Modal>
                    </a>
                  </div>
                </div>
                <div className="panel-footer">
                  <button
                    onClick={this.handleClick}
                    type="submit"
                    className="btn btn-primary"
                  >
                  Login
                  </button>
                  <span style={errStyle}> {this.state.err}</span>
                </div>
              </div>
            </div>
          </Col>
        </Panel>
      </div>
    );
  }
}

export default Login;
