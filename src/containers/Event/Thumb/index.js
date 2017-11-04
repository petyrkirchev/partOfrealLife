import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import dateIcon from './images/date.png';
import placeIcon from './images/place.png';

import Button from '../../../components/Button';
import ReadMore from '../../../components/ReadMore';

class EventThumb extends Component {
  constructor() {
    super();

    this.renderButton = this.renderButton.bind(this);
  }

  renderButton() {
    const { history, id, type } = this.props;
    let buttonType;
    let buttonLabel;

    if (type === 'free') {
      buttonType = 'success';
      buttonLabel = 'Безплатно';
    } else if (type === 'preOrder') {
      buttonType = 'info';
      buttonLabel = 'Резервирай';
    } else {
      buttonType = 'warning';
      buttonLabel = 'Купи билет';
    }

    return (
      <Button
        type={buttonType}
        size="m"
        width={100}
        onClick={() => { history.push(`/event/${id}`); }}
      >
        { buttonLabel }
      </Button>
    );
  }

  render() {
    const {
      id,
      title,
      description,
      thumb,
      program,
      tickets,
      location,
      isRecommended,
      className,
    } = this.props;
    return (
      <div className={`event__thumb m-b-lg ${className}`}>
        { isRecommended ? <span className="event__thumb__label">Препоръчано</span> : null }
        { thumb ? <div className="event__thumb__image" style={{ backgroundImage: `url('${thumb}')` }} /> : null }
        <div className="event__thumb__title">
          <h5 className="font-bold">
            <ReadMore active={false} maxChars={40} wordBreak>
              { title }
            </ReadMore>
          </h5>
        </div>
        <div className="event__thumb__desc">
          <ReadMore className="font-light" maxChars={97} active={false}>
            { description }
          </ReadMore>
          <div className="event__thumb__options">
            <div className="event__thumb__options__price">
              {tickets.length ? (
                <div className="event__thumb__options__amounts">
                  {tickets[0].discount ?
                    <span className="discount">{tickets[0].discount} лв.</span>
                    : null}
                  {tickets[0].price ? <span>{tickets[0].price.toFixed(2)} лв.</span> : null}
                </div>
              ) : null}
              { this.renderButton() }
            </div>
            <hr />
            <div className="event__thumb__options__datetime">
              <span>{ program.dates[0].date }</span>
              <img src={dateIcon} alt="Дата" />
              <span className="divider">&nbsp;</span>
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id={id}>
                    {location.region ? <p><strong>Регион:</strong> { location.region }</p> : null}
                    {location.city ? <p><strong>Град:</strong> { location.city }</p> : null}
                    {location.address ? <p><strong>Адрес:</strong> { location.address }</p> : null}
                    {location.place ? <p><strong>Място:</strong> { location.place }</p> : null}
                  </Tooltip>
                }
              >
                <img src={placeIcon} alt="Място" />
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventThumb.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumb: PropTypes.string,
  program: PropTypes.shape({
    headings: PropTypes.arrayOf(PropTypes.object),
    dates: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      hours: PropTypes.arrayOf(PropTypes.shape({
        hour: PropTypes.string,
        topic: PropTypes.string,
        host: PropTypes.string,
      })),
    })),
  }).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number,
    discount: PropTypes.number,
  })),
  location: PropTypes.shape({
    region: PropTypes.string,
    city: PropTypes.string,
    address: PropTypes.string,
    place: PropTypes.string,
  }).isRequired,
  isRecommended: PropTypes.bool,
  type: PropTypes.oneOf(['free', 'preOrder', 'onSale']).isRequired,
  className: PropTypes.string,
  history: PropTypes.shape.isRequired,
};

EventThumb.defaultProps = {
  thumb: '',
  tickets: [],
  isRecommended: false,
  className: '',
};

export default withRouter(EventThumb);
