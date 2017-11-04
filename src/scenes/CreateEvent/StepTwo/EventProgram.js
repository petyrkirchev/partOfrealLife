import React, { Component } from 'react';

import Button from '../../../components/Button';
import EditSection from '../../../components/EditSection';

import Program from '../../../containers/Program';

import iconClear from '../../../images/icon__view.png';
import iconShow from '../../../images/icon__show.png';
import iconSave from '../../../images/icon__save.png';

class EventProgram extends Component {
  render() {
    return (
      <EditSection
        title="Програма"
        background="white"
        video="video link"
        controlsPosition="bottom"
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
            <div className="col-xs-12 col-md-10 col-md-offset-1">
              <Program editable />
            </div>
          </div>
        </div>
      </EditSection>
    );
  }
}

export default EventProgram;
