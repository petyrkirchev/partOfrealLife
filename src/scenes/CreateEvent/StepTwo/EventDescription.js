import React, { Component } from 'react';

import Button from '../../../components/Button';
import EditSection from '../../../components/EditSection';
import RichTextArea from '../../../components/Form/RichTextArea';
import FormInput from '../../../components/Form/Input';

import iconView from '../../../images/icon__view.png';
import iconShow from '../../../images/icon__show.png';
import iconSave from '../../../images/icon__save.png';

class EventDescription extends Component {
  render() {
    return (
      <EditSection
        title="Описание на събитието"
        background="white"
        video="video link"
        controls={{
          1: <Button
            className="m-b-xxs"
            key="view"
            type="info"
            block
            size="sm"
            preIcon={iconView}
            iconSize={20}
          >
            Прегледай
          </Button>,
          2: <Button
            className="m-b-xxs"
            key="show"
            type="warning"
            block
            size="sm"
            preIcon={iconShow}
            iconSize={20}
          >
            Покажи
          </Button>,
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
          <div className="row m-b-md m-t-sm">
            <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2">
              <RichTextArea />
              <FormInput
                id="you_tube_video"
                placeholder="Въведи URL адрес на видео от Youtube..."
              />
            </div>
          </div>
        </div>
      </EditSection>
    );
  }
}

export default EventDescription;
