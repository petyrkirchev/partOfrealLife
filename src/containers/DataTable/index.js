import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../components/Button';

class DataTable extends Component {
  render() {
    const { headings, items } = this.props;

    return (
      <table className="data-table">
        <thead>
          <tr>
            { Object.keys(headings).map((key, index) => (
              <th
                className={classNames({
                  'data-table__th--last': index === Object.keys(headings).length - 1,
                })}
              >
                { headings[key] }
              </th>
            )) }
          </tr>
        </thead>
        <tbody>
          { Object.keys(items).map((row, index) => (
            <tr
              key={row}
              className={classNames({
                'data-table__tr--even': (index + 1) % 2 === 0,
              })}
            >
              { Object.keys(items[row]).map((column) => {
                let columnData = items[row][column];

                if (column === 'options') {
                  switch (columnData) {
                    case 'view': {
                      columnData = <Button size="sm">Прегледай</Button>;
                      break;
                    }
                    default: {
                      return null;
                    }
                  }
                }

                if (column === 'amount') {
                  columnData += 'лв.';
                }

                if (column === 'additionalInfo') {
                  const additionalInfo = items[row][column];
                  columnData = Object.keys(additionalInfo).map(key => (
                    <dl key={key}>
                      <dt>{ `${additionalInfo[key].label}:` }</dt>
                      <dd>{ additionalInfo[key].value }</dd>
                    </dl>
                  ));
                }

                return (
                  <td>
                    { columnData }
                  </td>
                );
              })}
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

DataTable.propTypes = {
  headings: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

DataTable.defaultProps = {

};

export default DataTable;
