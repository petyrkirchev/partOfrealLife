import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected ? props.selected : Object.keys(props.tabs)[0],
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(key) {
    this.setState({
      selected: key,
    });

    this.props.onSelect(key);
  }

  render() {
    const { tabs, type, width, height, direction, centered, fontSize, className } = this.props;

    const tabsClasses = classNames('tabs', `tabs--${type}`, {
      'tabs--horizontal': direction === 'horizontal',
      'tabs--vertical': direction === 'vertical',
      'tabs--centered': centered,
    }, className);

    const tabsKeys = Object.keys(tabs);
    const tabsLength = tabsKeys.length;

    let containerWidth;
    let itemWidth;

    if (width) {
      itemWidth = width;

      if (direction === 'horizontal') {
        containerWidth = width * tabsLength;
      } else {
        containerWidth = width;
      }
    } else {
      containerWidth = '100%';

      if (direction === 'horizontal') {
        itemWidth = `${100 / tabsLength}%`;
      } else {
        itemWidth = '100%';
      }
    }

    return (
      <div
        className={tabsClasses}
        style={{
          width: containerWidth,
          minHeight: height,
          lineHeight: `${height}px`,
          fontSize: `${fontSize}em`,
        }}
      >
        { tabsKeys.map((key, index) => {
          const tab = tabs[key];

          const tabsItemClasses = classNames('tabs__item', {
            'tabs__item--selected': key === this.state.selected,
            'tabs__item--no-border': index === tabsKeys.indexOf(this.state.selected) - 1 || index === tabsKeys.length - 1,
          });

          return (
            <div
              key={key}
              role="presentation"
              onClick={() => {
                if (tab.onClick) {
                  tab.onClick();
                }

                this.onSelect(key);
              }}
              className={tabsItemClasses}
              style={{
                width: itemWidth,
              }}
            >
              { tab.label }
            </div>
          );
        })}
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
  }).isRequired,
  type: PropTypes.oneOf(['default', 'warning']),
  selected: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  centered: PropTypes.bool,
  fontSize: PropTypes.number,
  onSelect: PropTypes.func,
  className: PropTypes.string,
};

Tabs.defaultProps = {
  type: 'default',
  selected: '',
  width: 0,
  height: 40,
  direction: 'horizontal',
  centered: false,
  fontSize: 1,
  onSelect: () => {},
  className: '',
};

export default Tabs;
