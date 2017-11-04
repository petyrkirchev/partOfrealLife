import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ReadMore from '../ReadMore';

class Note extends Component {
  render() {
    const { text, important } = this.props;

    return (
      <div className={classNames('note', {
        'note--important': important,
      })}
      >
        <ReadMore maxChars={100}>
          { text }
        </ReadMore>
      </div>
    );
  }
}

Note.propTypes = {
  text: PropTypes.string.isRequired,
  important: PropTypes.bool,
};

Note.defaultProps = {
  important: false,
};

export default Note;
