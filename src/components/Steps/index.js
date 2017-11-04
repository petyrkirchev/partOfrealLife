import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Steps extends Component {
  render() {
    const { steps, active } = this.props;

    const stepsKeys = Object.keys(steps);
    const length = stepsKeys.length;

    return (
      <div className="steps__container">
        <span
          className="steps__divider"
          style={{ left: `${50 / length}%`, right: `${50 / length}%` }}
        />
        <span
          className="steps__divider--active"
          style={{ left: `${50 / length}%`, right: `${(50 + ((length - active) * 100)) / length}%` }}
        />
        { stepsKeys.map((item, index) => {
          const step = steps[item];

          return (
            <div
              key={item}
              className={classNames('steps__item', {
                'steps__item--active': index === active - 1,
                'steps__item--past': index < active - 1,
              })}
              style={{ width: `${100 / length}%` }}
            >
              <span className="steps__item__title">
                <span className="hidden-xs hidden-sm">{step.name}</span>
              </span>
              <span className="steps__item__dot" />
              <h5 className="steps__item__label hidden-xs">
                {step.label}
                <span className="steps__item__label__desc hidden-sm">{step.desc}</span>
              </h5>
            </div>
          );
        })}
        <div className="clearfix" />
      </div>
    );
  }
}

Steps.propTypes = {
  steps: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
  active: PropTypes.number,
};

Steps.defaultProps = {
  active: 1,
};

export default Steps;
