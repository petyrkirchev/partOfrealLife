/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReadMore extends Component {
  constructor() {
    super();

    // TODO: Set text logics in constructor so it will be called once

    this.state = {
      hidden: true,
    };

    this.toggleTextVisibility = this.toggleTextVisibility.bind(this);
    this.smartWordsSplit = this.smartWordsSplit.bind(this);
  }

  toggleTextVisibility() {
    this.setState({ hidden: !this.state.hidden });
  }

  smartWordsSplit() {
    const { children, maxChars } = this.props;
    let slicedText;

    if (children.length <= maxChars) {
      return children;
    }

    for (let i = maxChars; i > 0; i -= 1) {
      const char = children[i];

      if (char === ' ') {
        slicedText = children.slice(0, i);
        break;
      }
    }

    return slicedText;
  }

  render() {
    const { children, wordBreak, active, maxChars, className } = this.props;

    let visible = wordBreak ? this.smartWordsSplit() : children.slice(0, maxChars);
    const hidden = children.slice(maxChars, children.length);

    if (!active && children.length > maxChars) {
      visible = `${visible}...`;
    }

    if (!hidden) {
      return <p className={className}>{ visible }</p>;
    }

    return (
      <p className={className}>
        { visible }
        <span className={this.state.hidden ? '' : 'animated fadeInDown'}>
          { this.state.hidden ? '' : hidden}
        </span>
        &nbsp;
        { active ? (
          <span
            role="presentation"
            className="read-more__link"
            onClick={this.toggleTextVisibility}
          >
            {this.state.hidden ? '[ Виж още ... ]' : '[ Скрии ]'}
          </span>
        ) : null }
      </p>
    );
  }
}

ReadMore.propTypes = {
  children: PropTypes.string.isRequired,
  wordBreak: PropTypes.bool,
  active: PropTypes.bool,
  maxChars: PropTypes.number,
  className: PropTypes.string,
};

ReadMore.defaultProps = {
  wordBreak: false,
  active: true,
  maxChars: 200,
  className: '',
};

export default ReadMore;
