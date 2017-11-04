import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Input from '../../components/Form/Input';
import Checkbox from '../../components/Form/Checkbox';
import Quantity from '../../components/Quantity';

import iconPlus from '../../images/icon_plus.png';
import iconMinus from '../../images/icon_minus.png';

class Tickets extends Component {
  render() {
    const { editable } = this.props;

    return (
      <div>
        <div className="tickets table-responsive">
          <table className="table tickets__table">
            <thead>
              <tr>
                <th>Вид билет</th>
                <th>В продажба до</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Промо код</th>
              </tr>
            </thead>
            <tbody className="tickets__table__body">
              <tr>
                <td>
                  { editable && (
                    <div className="tickets__table__check">
                      <Checkbox id="ticket-1" label="" type="dark" />
                    </div>
                  ) }
                  При ранна регистрация до 10 ноември
                  <span>спестявате 100 лв. за дати 17-19 ноември</span>
                </td>
                <td>
                  10 Ноември 2016
                  <span>Четвъртък, 23:55 ч.</span>
                </td>
                <td>
                  380.00 лв.
                  <span>(крайна цена)</span>
                </td>
                <td>
                  <Quantity value={2} max={100} />
                </td>
                <td>
                  <Button type="info" disableHover>CBR700</Button>
                </td>
              </tr>
              <tr>
                <td>
                  { editable && (
                    <div className="tickets__table__check">
                      <Checkbox id="ticket-2" label="" type="dark" />
                    </div>
                  ) }
                  Билет за двама
                  <span>по 360 лв. на човек. Спестявате 240 лв.</span>
                </td>
                <td>
                  16 Ноември 2016
                  <span>Сряда, 23:00 ч.</span>
                </td>
                <td>
                  720.00 лв.
                  <span>(крайна цена)</span>
                </td>
                <td>
                  <Quantity value={0} max={100} />
                </td>
                <td>
                  <Button type="warning">Добави</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        { editable && (
          <div className="clearfix m-t-sm">
            <p className="pull-left">Добави анкета</p>
            <ButtonGroup
              className="pull-right"
              width={150}
              size="sm"
              buttons={[
                {
                  name: 'add-ticket',
                  label: 'Добави билет',
                  mode: 'reversed',
                  preIcon: iconPlus,
                  iconSize: 10,
                },
                {
                  name: 'remove-ticket',
                  label: 'Премахни билет',
                  preIcon: iconMinus,
                  iconSize: 10,
                },
              ]}
            />
          </div>
        )}
        { !editable && (
          <div className="row m-t-sm">
            <div className="col-xs-12 col-sm-4">
              <label htmlFor="promo-code">Промо код</label>
              <Input size="md" type="text" id="promo-code" />
              <Button size="sm" type="warning">Провери</Button>
            </div>
            <div className="col-xs-12 col-sm-8 text-right tickets__pricing">
              <p>Обща сума: <span>1234.56 лв.</span></p>
              <p>Отстъпка: <span>-123.45 лв.</span></p>
              <p className="tickets__pricing--total">Сума за плащане: <span>1234.56 лв.</span></p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Tickets.propTypes = {
  editable: PropTypes.bool,
};

Tickets.defaultProps = {
  editable: false,
};

export default Tickets;
