import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class QuestionAnswer extends Component {
  render() {
    const { items } = this.props;
    let id = 0;

    return (
      <div className="question-answer row">
        { items.map((item, index) => {
          id += 1;

          return (
            <div
              key={id}
              className={classNames('question-answer__items', 'col-xs-12 col-md-6', {
                'question-answer__items--last': index === items.length - 1,
                'question-answer__items--before-last': index === items.length - 2,

              })}
            >
              <p className="question-answer__question">
                { item.question }
              </p>
              <p className="question-answer__answer">
                { item.answer }
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

QuestionAnswer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
};

export default QuestionAnswer;

