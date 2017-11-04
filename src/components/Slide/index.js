/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import iconPrev from '../../images/icon__slide__prev.png';
import iconNext from '../../images/icon__slide__next.png';

class Slide extends Component {
  constructor() {
    super();

    this.state = {
      offset: 0,
    };

    this.changeOffset = this.changeOffset.bind(this);
  }

  changeOffset(direction) {
    const { step } = this.props;
    let offset = this.state.offset;

    if (direction === 'prev' && this.state.offset + step > 0) {
      return;
    }

    if (direction === 'next' && this.state.offset + step < 0) {
      return;
    }

    if (direction === 'prev') {
      offset += step;
    }

    if (direction === 'next') {
      offset -= step;
    }

    this.setState({
      offset,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="slide">
        <div className="slide__prev" role="button" onClick={() => this.changeOffset('prev')}>
          <img src={iconPrev} alt="Назад" />
        </div>
        <div className="slide__container">
          <div className="slide__container__content" style={{ left: this.state.offset }} ref={(item) => { this.content = item; }}>
            { children }
          </div>
        </div>
        <div className="slide__next" role="button" onClick={() => this.changeOffset('next')}>
          <img src={iconNext} alt="Напред" />
        </div>
      </div>
    );
  }
}

Slide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  step: PropTypes.number.isRequired,
};

export default Slide;
