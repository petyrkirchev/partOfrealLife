import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button/index';
import TabNavigation from '../../components/TabNavigation';

// import BlogThumb from '../../containers/Blog/Thumb/index';
import Header from '../../containers/Header';
import Poster from '../../containers/Poster';
import Navigation from '../../containers/Navigation';
import Footer from '../../containers/Footer';

import events from '../../data/events.json';
import blogData from '../../data/blog.json';

class BlogSinglePost extends Component {
  render() {
    const { maxSidebarPosts } = this.props;
    const post = blogData[Object.keys(blogData)[0]];

    return (
      <div className="blog__single-post">
        <Header fixed transparent />
        <Poster {...events[0]} />
        <div className="container">
          <div className="row m-t-md m-b-md">
            <div className="col-xs-12">
              <TabNavigation
                active={6}
                tabs={[
                  {
                    label: 'Описание',
                  },
                  {
                    label: 'Програма',
                  },
                  {
                    label: 'Водещи',
                  },
                  {
                    label: 'Цени',
                  },
                  {
                    label: 'Локация',
                  },
                  {
                    label: 'За организатора',
                  },
                  {
                    label: 'Статии и препоръки',
                  },
                ]}
              />
            </div>
          </div>
          <div className="row m-b-md">
            <div className="col-xs-12">
              <h2>{ post.title }</h2>
            </div>
            <div className="col-sm-12 col-md-9">
              <p style={{ marginBottom: 10 }}>
                В нашият блог ще продължим да разглеждаме някои от основните функционалности
                на Събитие.БГ. Поредната, която ще представим е по-скоро удобството за крайните
                клиенти, които закуват билетите.
              </p>
              <p style={{ marginBottom: 10 }}>
                Голям проблем в онлайн търговията е, че хората не искат да се регистрират
                наляво и надясно. И ние не обичаме да го правим, за това решихме в сайта,
                когато даден потребител реши да закупи билет, въобще да не е необходима
                регистрация. Посетителят просто трябва да въведе данните си и да заплати поръчката.
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="blog__single-post__organizer">
                <div
                  className="blog__single-post__organizer__image"
                  style={{ backgroundImage: post.image }}
                />
                <h3 className="blog__single-post__organizer__title">{ post.organizer.name }</h3>
                <p className="blog__single-post__organizer__desc">{ post.organizer.desc }</p>
                <Button
                  width={120}
                  type="warning"
                  size="m"
                >
                  Виж повече
                </Button>
              </div>
              <div>
                <h3 className="m-b-md">Други публикации за събитието</h3>
                { Object.keys(blogData).length === 1 && (
                  <p>Няма други публикации</p>
                ) }
                { Object.keys(blogData).map((key, index) => {
                  const otherPost = blogData[key];

                  if (index > maxSidebarPosts - 1) {
                    return null;
                  }

                  return (
                    <div className="blog__single-post__other">
                      <div
                        className="blog__single-post__other__image"
                        style={{ backgroundImage: otherPost.image }}
                      />
                      <h4 className="blog__single-post__other__title">{ otherPost.title }</h4>
                      <div className="clearfix" />
                    </div>
                  );
                }) }
              </div>
              <div>
                <h3 className="m-b-md">Други събития от този организатор</h3>
                <p>Няма други събития</p>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

BlogSinglePost.propTypes = {
  maxSidebarPosts: PropTypes.number,
};

BlogSinglePost.defaultProps = {
  maxSidebarPosts: 4,
};

export default BlogSinglePost;
