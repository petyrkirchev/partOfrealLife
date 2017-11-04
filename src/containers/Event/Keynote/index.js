import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import ReadMore from '../../../components/ReadMore';
import { capitalizeWords } from '../../../utils';

class EventKeynote extends Component {
  constructor() {
    super();

    this.renderButton = this.renderButton.bind(this);
  }

  renderButton() {
    const { type } = this.props;
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
        size="lg"
        width={140}
      >
        { buttonLabel }
      </Button>
    );
  }

  render() {
    const {
      id,
      title,
      slogan,
      description,
      thumb,
      program,
      organizer,
      sharing,
      className,
    } = this.props;

    return (
      <div className={`event__keynote ${className}`}>
        { program ? (
          <div className="event__keynote__header">
            {
              program.dates.map((item, index) => (
                <div key={item.date} className="event__keynote__day">
                  <span>{`Ден ${index + 1}`}</span>
                  <span>{item.date}</span>
                </div>
              ))
            }
          </div>
        ) : null }
        <div className="event__keynote__content">
          { title ? (
            <h3 className="event__keynote__title">
              { title }{ slogan ? ` - ${slogan}` : '' }
            </h3>
          ) : null }
          <div className="event__keynote__desc">
            <img className="event__keynote__desc__image" src={thumb} alt={title} />
            <div className="event__keynote__desc__content">
              <p className="m-b-xs">
                Започваме в <strong>{program.dates[0].hours[0].hour}</strong>
              </p>
              { sharing ? (
                <p className="m-b-xs">Сподели в: {
                  sharing.map((item) => {
                    const siteName = capitalizeWords(item.replace('-', ' '));

                    return (
                      <a
                        key={item}
                        className="p-w-xxs"
                        href="www.abv.bg"
                        title={`Сподели "${title}" в ${siteName}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className={`fa fa-${item}`} />
                      </a>
                    );
                  })
                }</p>
              ) : null }
              <ReadMore maxChars={250}>{ description }</ReadMore>
            </div>
          </div>
          <div className="event__keynote__footer">
            <div className="event__keynote__organizer">
              <div
                className="event__keynote__organizer__image"
                style={{ backgroundImage: `url(${organizer.image})` }}
              />
              <div className="event__keynote__organizer__info">
                <p className="m-b-sm">Организатор</p>
                <h4>{organizer.name}</h4>
                <span className="event__keynote__organizer__info__job">
                  {organizer.jobTitle} at <strong>{organizer.company}</strong>
                </span>
              </div>
            </div>
            <Link to={`/event/${id}`}>
              { this.renderButton() }
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

EventKeynote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string,
  description: PropTypes.string,
  thumb: PropTypes.string.isRequired,
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
  // TODO: Make some default image for events without image
  organizer: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    jobTitle: PropTypes.string,
    company: PropTypes.string,
  }).isRequired,
  type: PropTypes.oneOf(['free', 'preOrder', 'onSale']).isRequired,
  sharing: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

EventKeynote.defaultProps = {
  slogan: '',
  description: '',
  sharing: [],
  organizer: {},
  className: '',
};

export default EventKeynote;
