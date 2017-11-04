import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Table extends Component {
  render() {
    const { headings, data } = this.props;

    return (
      <table className="table">
        <thead className="table__heading">
          <tr>
            { Object.keys(headings).map(key => (
              <th key={key} className="table__heading__cell">{ headings[key] }</th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          { Object.keys(data).map((dataKey, dataIndex) => {
            const row = data[dataKey];
            const rowClasses = classNames('table__row', {
              'table__row--last': dataIndex === Object.keys(data).length - 1,
            });

            return (
              <tr key={dataKey} className={rowClasses}>
                { Object.keys(row).map((rowKey, rowIndex) => {
                  const cell = row[rowKey];
                  const cellClasses = classNames('table__cell', {
                    'table__cell--last': rowIndex === Object.keys(row).length - 1,
                  });

                  return (
                    <td key={rowKey} className={cellClasses}>{ cell }</td>
                  );
                }) }
              </tr>
            );
          }) }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  headings: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Table;
