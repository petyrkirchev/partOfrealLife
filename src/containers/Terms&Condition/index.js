import React, { Component } from 'react';
import { getContent } from './Actions/index';

class TermsAndCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: '',
      error: '',
      clearInheritStyles: {
        all: 'initial',
      },
    };
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }
  componentDidMount() {
    getContent(this.handleSuccess, this.handleReject);
  }
  handleSuccess(response) {
    let terms = JSON.parse(response);
    terms = terms[0].content;
    this.setState({ terms, error: '' });
  }

  handleReject() {
    this.setState({ error: 'ERROR Please contact Customer Support' });
  }

  render() {
    return (
      <div>
        <h1>Terms and conditions</h1>
        <div
          dangerouslySetInnerHTML={{ __html: this.state.terms }}
          style={this.state.clearInheritStyles}
        />
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default TermsAndCondition;
