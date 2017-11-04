import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const {
      size,
      link,
      font,
      border,
      type,
      color,
      background,
      style,
      className,
      children,
    } = this.props;

    return (
      <a
        className={
          `icon
          ${typeof size === 'string' ? `icon-${size}` : ''}
          ${`icon-text-${color}`}
          ${`icon-${type}`}
          ${!link ? 'disabled' : ''}
          ${className}
          `
        }
        style={
          Object.assign(
            {},
            typeof size === 'number' ?
              { width: `${size}px`, height: `${size}px` } :
              { width: `${size.width}px`, height: `${size.height}px` },
            typeof font === 'number' ? { fontSize: `${font}em` } : { fontSize: font },
            { borderWidth: border.width, borderColor: border.color, borderStyle: border.style },
            { backgroundColor: background },
            style)}
        href={typeof link === 'string' ? link : `javascript: ${link};`}
      >
        { children }
      </a>
    );
  }
}

Icon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    PropTypes.oneOf(['sm', 'm', 'md', 'lg', 'xl']),
  ]),
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  font: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  border: PropTypes.shape({
    width: PropTypes.number.isRequired,
    color: PropTypes.string,
    style: PropTypes.string,
  }),
  type: PropTypes.oneOf(['normal', 'rounded', 'circle']),
  color: PropTypes.oneOf(['light', 'dark']),
  background: PropTypes.string,
  style: PropTypes.shape({}),
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: 'md',
  link: () => {},
  font: 1,
  border: {
    width: 0,
    color: '#868686',
    style: 'solid',
  },
  type: 'normal',
  color: 'light',
  background: '#b7b7b7',
  style: {},
  className: '',
};

export default Icon;
