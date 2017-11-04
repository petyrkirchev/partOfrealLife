import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createArrayMap } from '../../../../utils';

class TableSize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selecting: false,
      row: 0,
      column: 0,
    };

    this.rowsMap = createArrayMap(props.rows);
    this.columnssMap = createArrayMap(props.columns);

    this.onItemHover = this.onItemHover.bind(this);
    this.togleSelecting = this.togleSelecting.bind(this);
  }

  componentDidMount() {
    this.items = this.table.getElementsByClassName('table-size__item');

    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      item.addEventListener('mouseover', () => this.onItemHover(item));
    }

    window.addEventListener('mousedown', this.togleSelecting);
    window.addEventListener('mouseup', this.togleSelecting);
  }

  componentWillUnmount() {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      item.removeEventListener('mouseover', () => this.onItemHover(item));
    }

    window.removeEventListener('mousedown', this.togleSelecting);
    window.removeEventListener('mouseup', this.togleSelecting);
  }

  onItemHover(currentItem) {
    const { size } = this.props;
    const row = parseInt(currentItem.dataset.row, 10);
    const column = parseInt(currentItem.dataset.column, 10);

    if (this.state.selecting) {
      this.setState({
        row,
        column,
      });

      this.selection.style.display = 'block';
      this.selection.style.width = `${row * size}px`;
      this.selection.style.height = `${column * size}px`;
      this.selection.style.paddingRight = `${(row * 3) - 1}px`;
      this.selection.style.paddingBottom = `${(column * 3) - 1}px`;

      for (let i = 0; i < this.items.length; i += 1) {
        const item = this.items[i];
        const itemRow = parseInt(item.dataset.row, 10);
        const itemColumn = parseInt(item.dataset.column, 10);

        item.classList.remove('table-size__item--selected');

        if (itemRow <= row && itemColumn <= column) {
          item.classList.add('table-size__item--selected');
        }
      }
    }
  }

  togleSelecting(event) {
    this.setState({
      selecting: !this.state.selecting,
    });

    if (this.state.selecting) {
      this.setState({
        row: 0,
        column: 0,
      });

      this.selection.style.display = 'none';

      for (let i = 0; i < this.items.length; i += 1) {
        const item = this.items[i];

        item.classList.remove('table-size__item--selected');
      }
    }

    if (event.target.className.indexOf('table-size__item') !== -1) {
      this.onItemHover(event.target);
    }
  }

  render() {
    const { size } = this.props;

    return (
      <div className="table-size" ref={(item) => { this.table = item; }}>
        <div className="table-size__info">
          { this.state.column } x { this.state.row }
        </div>
        <div className="table-size__container">
          <div className="table-size__selection" ref={(item) => { this.selection = item; }} />
          { this.rowsMap.map((rowItem, rowIndex) => (
            <div key={rowItem.id} className="table-size__row">
              { this.columnssMap.map((columnItem, columnIndex) => (
                <div
                  key={columnItem.id}
                  className="table-size__item"
                  style={{ width: size, height: size }}
                  data-row={rowIndex + 1}
                  data-column={columnIndex + 1}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

TableSize.propTypes = {
  size: PropTypes.number,
  rows: PropTypes.number,
  columns: PropTypes.number,
};

TableSize.defaultProps = {
  size: 20,
  rows: 8,
  columns: 10,
};

export default TableSize;
