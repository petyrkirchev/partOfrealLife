import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { debounce } from '../../utils';

class TabNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
      width: 0,
      left: 0,
    };

    this.list = {};
    this.onTabClicked = this.onTabClicked.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', debounce(this.onResize, 250));
  }

  componentDidMount() {
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onTabClicked(index) {
    if (this.props.tabs[index].onClick) {
      this.props.tabs[index].onClick();
    }

    this.setState({
      active: index,
      width: this.list[index].offsetWidth,
      left: this.list[index].offsetLeft,
    });
  }

  onChange(event) {
    this.onTabClicked(parseInt(event.target.value, 10));
  }

  onResize() {
    this.setState({
      width: this.list[this.state.active].offsetWidth,
      left: this.list[this.state.active].offsetLeft,
    });
  }

  render() {
    const { tabs } = this.props;

    return (
      <div className="tab__navigation">
        <ul className="tab__navigation__menu hidden-xs">
          { tabs.map((item, index) => (
            <li
              role="presentation"
              key={item.label}
              ref={(listItem) => { this.list[index] = listItem; }}
              className={index === this.state.active ? 'active' : ''}
              onClick={() => this.onTabClicked(index)}
            >
              { item.label }
            </li>
          ))}
          <div
            className="tab__navigation__menu__active"
            style={{ width: this.state.width, left: this.state.left }}
          />
        </ul>

        <select className="visible-xs" value={this.state.active} onChange={this.onChange}>
          { tabs.map((item, index) => (
            <option
              key={item.label}
              value={index}
            >
              { item.label }
            </option>
          ))}
        </select>
        <div className="tab__navigation__content">
          { tabs.map((item, index) => (
            <div
              key={item.label}
              className={index !== this.state.active ? 'hidden' : 'animated fadeIn'}
            >
              { item.content }
            </div>
          ))}
        </div>
      </div>
    );
  }
}

TabNavigation.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func,
    content: PropTypes.any,
  })).isRequired,
  active: PropTypes.number,
};

TabNavigation.defaultProps = {
  active: 0,
};

export default TabNavigation;
