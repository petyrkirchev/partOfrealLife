import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Titles extends Component {
  render() {
    const { children, type, border, className } = this.props;

    const titleClasses = classNames('title', `title__${type}`, {
      'title--has-border': border,
    }, className);

    switch (type) {
      case 'h1':
        return <h1 className={titleClasses}>{ children }</h1>;
      case 'h2':
        return <h2 className={titleClasses}>{ children }</h2>;
      case 'h3':
        return <h3 className={titleClasses}>{ children }</h3>;
      case 'h4':
        return <h4 className={titleClasses}>{ children }</h4>;
      case 'h5':
        return <h5 className={titleClasses}>{ children }</h5>;
      default:
        return <h1 className={titleClasses}>{ children }</h1>;
    }
  }
}

Titles.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  border: PropTypes.bool,
  className: PropTypes.string,
};

Titles.defaultProps = {
  type: 'h1',
  border: false,
  className: '',
};

export default Titles;
