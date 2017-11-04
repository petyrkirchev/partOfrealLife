import React, { Component } from 'react';
import { Panel, Col, FormControl } from 'react-bootstrap';

class ForgottenPassword extends Component {

  render() {
    return (
      <div>
        <Panel>
          <Col lg={15}>
            <div className="panel panel-default">
              <div className="panel-heading">
                <div className="panel-title">Forgot your password?</div>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label htmlFor="email" className="control-label">Email *</label>
                  <FormControl
                    type="text"
                    name="email"
                    required="required"
                    className="form-control"
                  />
                </div>
                <div className="required">* Required fields</div>
              </div>
              <div className="panel-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </Col>
        </Panel>
      </div>
    );
  }
}

export default ForgottenPassword;
