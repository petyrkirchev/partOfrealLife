import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Breadcrumbs extends Component {
  render() {
    const { path, className, style } = this.props;

    return (
      <div className={classNames('breadcrumbs', className)} style={style}>
        { Object.keys(path).map((key, index) => {
          const breadcrumb = path[key];

          if (index === Object.keys(path).length - 1) {
            return (
              <span
                key={key}
                className="breadcrumbs--current"
              >
                { breadcrumb.label }
              </span>
            );
          }

          return (
            <a
              key={key}
              className="breadcrumbs__link"
              href={breadcrumb.link}
              title={breadcrumb.title ? breadcrumb.title : breadcrumb.label}
            >
              { breadcrumb.label }
            </a>
          );
        })}
      </div>
    );
  }
}

Breadcrumbs.propTypes = {
  path: PropTypes.shape({
    label: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

Breadcrumbs.defaultProps = {
  className: '',
  style: null,
};

export default Breadcrumbs;
