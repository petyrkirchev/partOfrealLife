import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Hammer from 'hammerjs';

import { scrollToSection } from '../../utils';

import Button from '../../components/Button';
import ReadMore from '../../components/ReadMore';

import iconDown from '../../images/icon__down.png';

class Slider extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      direction: null,
      transitioning: false,
    };

    this.sliderTimeout = null;
    this.onSlideEnd = this.onSlideEnd.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  componentDidMount() {
    this.sliderTimeout = setTimeout(() => this.changeSlide(this.state.index + 1, 'next'), 5000);

    this.hammertime = new Hammer(this.slider);
    this.hammertime.on('swipe', this.handleSwipe).set({ direction: Hammer.DIRECTION_HORIZONTAL });
  }

  onSlideEnd() {
    this.sliderTimeout = setTimeout(() => this.changeSlide(this.state.index + 1, 'next'), 5000);

    this.setState({
      transitioning: false,
    });
  }

  handleSwipe(event) {
    if (event.direction === 2) {
      this.changeSlide(this.state.index + 1, 'next');
      return;
    }

    this.changeSlide(this.state.index - 1, 'prev');
  }

  changeSlide(selectedIndex, direction) {
    const length = Object.keys(this.props.events).length - 1;
    let index = selectedIndex;

    clearTimeout(this.sliderTimeout);
    this.sliderTimeout = null;

    if (this.state.transitioning) {
      return;
    }

    if (selectedIndex < 0) {
      index = length;
    } else if (selectedIndex > length) {
      index = 0;
    }

    this.setState({
      index,
      direction,
      transitioning: true,
    });
  }

  selectItem(index) {
    clearTimeout(this.sliderTimeout);
    this.sliderTimeout = null;

    if (index === this.state.index || this.state.transitioning) {
      return;
    }

    this.setState({
      index,
      direction: index > this.state.index ? 'next' : 'prev',
      transitioning: true,
    });
  }

  render() {
    const { events } = this.props;

    return (
      <div className="slider" ref={(item) => { this.slider = item; }}>
        <div className="slider__content">
          <Carousel
            activeIndex={this.state.index}
            direction={this.state.direction}
            onSlideEnd={this.onSlideEnd}
          >
            { Object.keys(events).map((key) => {
              const event = events[key];

              return (
                <Carousel.Item key={key}>
                  <div className="slider__image" style={{ backgroundImage: `url('${event.image}')` }} />
                  <Carousel.Caption>
                    <h1 className="slider__title">
                      { event.title }
                    </h1>
                    <h2 className="slider__slogan">{ event.slogan }</h2>
                    <div className="slider__desc">
                      <ReadMore maxChars={140} active={false} wordBreak>
                        { event.description }
                      </ReadMore>
                      <span className="slider__desc__divider">&nbsp;</span>
                      <Link to={`/event/${event.id}`}>
                        <Button
                          size="lg"
                          type="warning"
                          mode="reversed"
                          className="slider__desc__button"
                        >
                          Към събитието
                        </Button>
                      </Link>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div ref={(item) => { this.thumbs = item; }} className="slider__thumbs">
            <span
              role="presentation"
              className="slider__control slider__control--left"
              onClick={() => this.changeSlide(this.state.index - 1, 'prev')}
            >
              <i className="fa fa-chevron-left" />
            </span>
            <div className="slider__thumbs__items">
              { Object.keys(events).map((key, index) => {
                const event = events[key];

                return (
                  <div
                    role="presentation"
                    key={key}
                    className={`
                      slider__thumbs__item
                      ${index === 0 ? 'slider__thumbs__item--first' : ''}
                      ${index === Object.keys(events).length - 1 ? 'slider__thumbs__item--last' : ''}
                      ${this.state.index === index ? 'slider__thumbs__item--active' : ''}
                    `}
                    onClick={() => this.selectItem(index)}
                  >
                    <div className="slider__thumbs__image-container">
                      <div
                        className="slider__thumbs__image"
                        style={{ backgroundImage: `url('${event.thumb}')` }}
                      />
                    </div>
                    <ReadMore
                      className="slider__thumbs__title"
                      maxChars={20}
                      active={false}
                      wordBreak
                    >
                      { event.title }
                    </ReadMore>
                  </div>
                );
              })}
            </div>
            <span
              role="presentation"
              className="slider__control slider__control--right"
              onClick={() => this.changeSlide(this.state.index + 1, 'next')}
            >
              <i className="fa fa-chevron-right" />
            </span>
          </div>
          <span
            role="presentation"
            className="slider__down"
            onClick={() => { scrollToSection('#search'); }}
          >
            <img src={iconDown} alt="Надолу" />
          </span>
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    slogan: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,

  })).isRequired,
};

export default Slider;
