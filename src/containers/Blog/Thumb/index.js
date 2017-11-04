import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class BlogThumb extends Component {
  render() {
    const { image, created, comments, title, desc } = this.props;

    return (
      <div className={classNames('blog__thumb', {
        'blog__thumb--dateCreated': created,
      })}
      >
        <div className="blog__thumb__info">
          <div className="blog__thumb__image-container">
            <div className="blog__thumb__image" style={{ backgroundImage: image }} />
          </div>
          <div className="blog__thumb__more">
            { created && (
              <span className="blog__thumb__dateCreated">
                <i className="fa fa-clock-o" /> { created }
              </span>
            )}
            { comments > 0 && (
              <span className="blog__thumb__comments">
                <i className="fa fa-comments-o" /> { comments }
              </span>
            )}
          </div>
        </div>
        <div className="blog__thumb__content">
          <h3 className="blog__thumb__title">
            { title }
          </h3>
          <p className="blog__thumb__desc">
            { desc }
          </p>
        </div>
      </div>
    );
  }
}

BlogThumb.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  created: PropTypes.string,
  comments: PropTypes.number,
  image: PropTypes.string.isRequired,
};

BlogThumb.defaultProps = {
  desc: '',
  created: '',
  comments: 0,
};

export default BlogThumb;
