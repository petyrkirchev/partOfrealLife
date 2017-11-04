import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Fixed from '../../components/Fixed';

import iconSearch from '../../images/icon__search.png';
import iconCalendar from '../../images/icon__calendar.png';
import iconBars from '../../images/icon__bars.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSearch() {//eslint-disable-line
    document.getElementById('buny').click();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div id="search">
        <Fixed className="search">
          <div className="container search__container">
            <div className="search__container__item search__container__item--first">
              <h3 className="search__event">
                Намерете тук
                <span>вашето събитие</span>
              </h3>
              <div className="search__input search__input--text">
                <input
                  name="title"
                  type="text"
                  placeholder="Търсене по  заглавие, подзаглавие, организатор, локация"
                  onChange={this.handleChange}
                />
                <span className="search__input__icon" >
                  <img src={iconSearch} alt="Search icon" />
                </span>
              </div>
            </div>
            <Link to={`/event/search/title/${this.state.title}`}>
              <div id="buny" />
            </Link>
            <div className="search__container__item search__container__item--second">
              <div className="search__input search__input--date">
                <span className="search__input__icon">
                  <img src={iconCalendar} alt="Calendar icon" />
                </span>
              </div>
              <div className="search__input search__input--category">
                <select>
                  <option value="0">Избери категория</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span className="search__input__icon">
                  <img src={iconBars} alt="Select icon" />
                </span>
              </div>
              <Button
                className="search__input--search"
                size="md"
                mode="reversed"
                type="warning"
                onClick={this.handleSearch}
              >
                Търси
              </Button>
            </div>
          </div>
        </Fixed>
      </div>
    );
  }
}

export default Search;

