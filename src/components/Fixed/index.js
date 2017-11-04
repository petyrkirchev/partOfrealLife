import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { debounce } from '../../utils';

class Fixed extends Component {
  constructor() {
    super();

    this.state = {
      fixed: false,
    };

    this.setSearchPosition = this.setSearchPosition.bind(this);
  }

  componentDidMount() {
    this.setSearchPosition();
    // TODO: See if this will slow site
    window.addEventListener('scroll', debounce(this.setSearchPosition, 0));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setSearchPosition);
  }

  setSearchPosition() {
    this.setState({
      fixed: this.isBellowScroll(),
    });
  }

  isBellowScroll() {
    const position = this.fixed.getBoundingClientRect();

    return position.top < 0;
  }

  render() {
    const { children, background, className } = this.props;

    return (
      <div
        ref={(item) => { this.fixed = item; }}
      >
        <div
          style={{ backgroundColor: background }}
          className={classNames({
            fixed: this.state.fixed,
          }, className)}
        >
          { children }
        </div>
      </div>
    );
  }
}

Fixed.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  background: PropTypes.string,
  className: PropTypes.string,
};

Fixed.defaultProps = {
  background: '',
  className: '',
};

export default Fixed;
