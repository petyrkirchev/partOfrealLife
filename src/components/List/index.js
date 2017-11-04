import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';

class List extends Component {
  renderListRows() {
    const { items, maxColumns } = this.props;
    const rows = [];

    for (let i = 0; i <= items.length - 1; i += items.length / maxColumns) {
      rows.push(
        <table
          key={i}
          width={`${100 / maxColumns}%`}
          className="list__table"
        >
          { this.renderListColumns(i) }
        </table> //eslint-disable-line
      );
    }

    return rows;
  }

  renderListColumns(index) {
    const { items, maxColumns, labeled, bullet } = this.props;
    const columns = [];

    for (let i = index; i < index + (items.length / maxColumns); i += 1) {
      columns.push(
        <tbody key={i}>
          <tr>
            <td className="list__td--label">
              { bullet && (
                <div className="list__td--bullet">
                  <span className="list__bullet" />
                </div>
              )}
              <span className="list__label">{ items[i].label }:</span>
            </td>
            <td className="list__td--text">
              <span className="list__text">
                { labeled ? (
                  <Label block={false}>
                    { items[i].text }
                  </Label>
                ) : items[i].text }
              </span>
            </td>
          </tr>
        </tbody>//eslint-disable-line
      );
    }

    return columns;
  }

  render() {
    return (
      <div className="list">
        { this.renderListRows() }
        <div className="clearfix" />
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    desc: PropTypes.string,
  })).isRequired,
  maxColumns: PropTypes.number,
  labeled: PropTypes.bool,
  bullet: PropTypes.bool,
};

List.defaultProps = {
  maxColumns: 1,
  labeled: false,
  bullet: true,
};

export default List;
