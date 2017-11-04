import React, { Component } from 'react';

import Button from '../../../components/Button';
import EditSection from '../../../components/EditSection';

import Location from '../../../containers/Location';

import iconClear from '../../../images/icon__view.png';
import iconShow from '../../../images/icon__show.png';
import iconSave from '../../../images/icon__save.png';

class EventAdditional extends Component {
  render() {
    return (
      <EditSection
        title="Допълнително за събитието"
        background="gray"
        video="video link"
        controls={{
          1: <Button
            className="m-b-xxs"
            key="view"
            type="danger"
            block
            size="sm"
            preIcon={iconClear}
            iconSize={20}
          >
            Изчисти
          </Button>,
          2: <Button
            className="m-b-xxs"
            key="show"
            type="danger"
            block
            size="sm"
            preIcon={iconShow}
            iconSize={20}
          >
            Скрий
          </Button>,
          3: <Button
            key="save"
            type="warning"
            block
            size="sm"
            preIcon={iconSave}
            iconSize={20}
          >
            Запази
          </Button>,
        }}
      >
        <div className="container">
          <div className="row m-b-md m-t-sm">
            <div className="col-xs-12 col-md-7">
              <h4 className="text--uppercase m-t-sm m-b-sm">Къде ще се проведе събитието</h4>
              <Location editable />
            </div>
            <div className="col-xs-12 col-md-4">
              <h4 className="text--uppercase m-t-sm m-b-sm">Блог / Галерия / Видео</h4>
            </div>
          </div>
        </div>
      </EditSection>
    );
  }
}

export default EventAdditional;
