import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Label extends Component {
  render() {
    const { children, block, className } = this.props;

    return (
      <div
        className={classNames('text-label', {
          'text-label--block': block,
        }, className)}
      >
        { children }
      </div>
    );
  }
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
  className: PropTypes.string,
};

Label.defaultProps = {
  block: true,
  className: '',
};

export default Label;
