/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

import Button from '../../components/Button';
import ReadMore from '../../components/ReadMore';
import Editable from '../../components/Editable';

class Poster extends Component {
  
  renderEditableField(children, maxLength,whatIEdit) {
    const { editable,urlId } = this.props;
    if (editable) {

      return (
        <Editable urlId={urlId} whatIEdit={whatIEdit} maxLength={maxLength} type="dark">
          {children}
        </Editable>
      );
    }

    return children;
  }
  render() {
    const { image, title, slogan, description, editable } = this.props;
    const dates = this.props.program.dates;
    const startDate = dates[0].date;
    const startHour = dates[0].hours[0].hour;
    const endDate = dates[dates.length - 1].date;
    const endHour = dates[dates.length - 1].hours[dates[dates.length - 1].hours.length - 1].hour;

    return (
      <div className="poster" style={{ backgroundImage: `url('${image}')` }}>
        <div className="container poster__container">
          <div className="poster__info">
            <h1 className="poster__title">
              {this.renderEditableField(title, 100,'title')}
            </h1>
            <h3 className="poster__slogan">
              {this.renderEditableField(slogan, 50,'slogan')}
            </h3>
            <p className="poster__description">
              {editable ? this.renderEditableField(description, 200,'description') : (
                <ReadMore maxChars={200} active={false} wordBreak={true}>
                  {description}
                </ReadMore>
              )}
            </p>
          </div>
        </div>
        <div className="poster__dates">
          <div className="poster__dates--start">
            <div className="poster__dates__date">
              <span>Начало - {moment(startDate, 'DD/MM/YYYY').format('dddd')}</span>
              {startDate}
            </div>
            <div className="poster__dates__time">
              {startHour}
            </div>
          </div>
          <Link  to={'/event/tickets/buy'}>
            <Button
              center
              type="warning"
              size='md'
              width={200}
            >
              Купи билет
          </Button>
          </Link>
          <div className="poster__dates--end">
            <div className="poster__dates__date">
              <span>Край - {moment(endDate, 'DD/MM/YYYY').format('dddd')}</span>
              {endDate}
            </div>
            <div className="poster__dates__time">
              {endHour}
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    );
  }
}

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string,
  description: PropTypes.string,
  editable: PropTypes.bool,
};

Poster.defaultProps = {
  slogan: '',
  description: '',
  editable: false,
};

export default Poster;
