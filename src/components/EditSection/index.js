/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import iconVideo from '../../images/ion__video.png';

class EditSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: props.hidden,
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }
  render() {
    const { children, title, background, video, controls, controlsPosition } = this.props;

    return (
      <div
        className={classNames('edit-section', `edit-section--${background}`, {
          'edit-section--hidden': this.state.hidden,
        })}
      >
        <div className="edit-section__container">
          <div className="edit-section__header">
            <h2 className="edit-section__header__title">{ title }</h2>
            { video && <img className="edit-section__header__video" src={iconVideo} alt="Video icon" /> }
          </div>
          <div className="edit-section__content">
            { children }
          </div>
          { controls && (
            <div className={classNames('edit-section__controls', `edit-section__controls--${controlsPosition}`)}>
              { Object.keys(controls).map(key => controls[key])}
            </div>
          )}
        </div>
      </div>
    );
  }
}

EditSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  background: PropTypes.oneOf(['white', 'gray']),
  video: PropTypes.string,
  controls: PropTypes.objectOf(PropTypes.element),
  controlsPosition: PropTypes.oneOf(['top', 'center', 'bottom']),
  hidden: PropTypes.bool,
};

EditSection.defaultProps = {
  background: 'white',
  video: '',
  controls: null,
  controlsPosition: 'center',
  hidden: false,
};

export default EditSection;
