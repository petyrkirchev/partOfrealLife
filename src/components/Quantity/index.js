import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

class Quantity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };

    this.incrementValue = this.incrementValue.bind(this);
    this.decrementValue = this.decrementValue.bind(this);
  }

  incrementValue() {
    if (this.state.value >= this.props.max) {
      return;
    }

    this.setState({
      value: this.state.value + 1,
    });
  }

  decrementValue() {
    if (this.state.value === 0) {
      return;
    }

    this.setState({
      value: this.state.value - 1,
    });
  }

  render() {
    return (
      <div className="quantity">
        <span
          className="quantity__action quantity__action--minus"
          role="button"
          tabIndex={-1}
          onClick={this.decrementValue}
        >
          <i className="fa fa-minus" />
        </span>
        <span className="quantity__value">
          { this.state.value }
        </span>
        <span
          className="quantity__action quantity__action--plus"
          role="button"
          tabIndex={0}
          onClick={this.incrementValue}
        >
          <i className="fa fa-plus" />
        </span>
      </div>
    );
  }
}

Quantity.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number.isRequired,
};

Quantity.defaultProps = {
  value: 0,
};

export default Quantity;
