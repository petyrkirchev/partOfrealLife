import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Menu extends Component {
  render() {
    const {
      items,
      vertical,
      className,
    } = this.props;

    if (!Object.keys(items).length) {
      return null;
    }

    return (
      <nav
        className={classNames('menu', {
          'menu--vertical': vertical,
        }, className)}
      >
        <ul
          ref={(item) => { this.menu = item; }}
          className="menu__list"
        >
          { Object.keys(items).map((key, index) => {
            const item = items[key];

            return (
              <li
                key={item.label}
                className={classNames('menu__list__item', {
                  'menu__list__item--first': index === 0,
                  'menu__list__item--last': index === items.length - 1,
                })}
              >
                <a
                  role="presentation"
                  className={classNames('menu__list__item__link')}
                  onClick={item.onClick}
                  target={item.target ? item.target : ''}
                  title={`Събитие.bg - ${item.title ? item.title : item.label}`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string,
    target: PropTypes.string,
  })).isRequired,
  vertical: PropTypes.bool,
  className: PropTypes.string,
};

Menu.defaultProps = {
  vertical: false,
  type: 'vertical',
  className: '',
};

export default Menu;
