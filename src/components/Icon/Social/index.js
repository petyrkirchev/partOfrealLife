import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../index';

class Social extends Component {
  render() {
    const { site, link } = this.props;
    let background;

    switch (site) {
      case 'facebook': {
        background = '#3b5998';
        break;
      }
      case 'google': {
        background = '#dd4b39';
        break;
      }
      case 'google-plus': {
        background = '#dd4b39';
        break;
      }
      default: {
        background = '#362f2d';
        break;
      }
    }

    return (
      <Icon {...this.props} link={link} background={this.props.background || background}>
        <i className={`fa fa-${site}`} />
      </Icon>
    );
  }
}

Social.propTypes = {
  site: PropTypes.oneOf([
    'facebook',
    'google',
    'google-plus',
  ]).isRequired,
  link: PropTypes.string.isRequired,
  background: PropTypes.string,
};

Social.defaultProps = {
  background: '',
  size: 37,
  font: 1.25,
  type: 'circle',
};

export default Social;
