import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import routes from '../../routes';

import Button from '../../components/Button/index';
import TabNavigation from '../../components/TabNavigation';

import Header from '../../containers/Header';
import Poster from '../../containers/Poster';
import BlogThumb from '../../containers/Blog/Thumb/index';
import Navigation from '../../containers/Navigation';
import Footer from '../../containers/Footer';
import Loader from '../../components/Loader';

import events from '../../data/events.json';
import blogData from '../../data/blog.json';

class BlogPosts extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
    };

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState({
      loading: true,
    });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 4000);
  }

  render() {
    const { history } = this.props;

    return (
      <div>
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
          <div className="row">
            { Object.keys(blogData).map((key, index) => {
              const item = blogData[key];

              return (
                <div
                  key={key}
                  role="presentation"
                  onClick={() => history.push(routes.getRoute('blogPost'))}
                  className="col-sm-12 col-md-6"
                  style={{
                    clear: index % 2 === 0 ? 'both' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  <BlogThumb
                    title={item.title}
                    desc={item.desc}
                    image={item.image}
                    created={item.created}
                  />
                </div>
              );
            }) }
          </div>
          <div className="row m-b-md">
            <div className="col-xs-12">
              { this.state.loading ? (
                <div style={{ width: 250 }}>
                  <Loader center />
                </div>
              ) : (
                <Button
                  width={260}
                  mode="bordered"
                  size="md"
                  onClick={this.loadMore}
                >
                  Зареди още публикации
                </Button>
              )}

            </div>
          </div>
        </div>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

BlogPosts.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

export default withRouter(BlogPosts);
