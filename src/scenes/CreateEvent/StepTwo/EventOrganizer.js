import React, { Component } from 'react';

import Button from '../../../components/Button';
import EditSection from '../../../components/EditSection';

import Organizer from '../../../containers/Organizer';

import iconClear from '../../../images/icon__clear.png';
import iconShow from '../../../images/icon__show.png';
import iconSave from '../../../images/icon__save.png';

class EventOrganizer extends Component {
  toggleHidden() {
    console.log('clicking'); //eslint-disable-line
    console.log(this.section); //eslint-disable-line
  }

  render() {
    var urlId=this.props.urlId//eslint-disable-line
    var editable=this.props.editable;//eslint-disable-line
    return (
      <EditSection
        ref={(section) => { this.section = section; }}
        title="За организатора"
        video="video link"
        controlsPosition="center"
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
          2: (
            <Button
              className="m-b-xxs"
              key="show"
              type="danger"
              block
              size="sm"
              preIcon={iconShow}
              iconSize={20}
              onClick={() => { this.toggleHidden(); }}
            >
              Скрий
            </Button>
          ),
          3: <Button
            key="save"
            type="info"
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
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-10 col-md-offset-1">
              <Organizer editable={editable === undefined ? true : editable} urlId={urlId} />
            </div>
          </div>
        </div>
      </EditSection>
    );
  }
}

export default EventOrganizer;
