import React, { Component } from 'react';

import ButtonDownload from '../Download';
import iconPlus from '../../../images/icon__plus.svg';

class AddNote extends Component {
  render() {
    return (
      <ButtonDownload
        label="Добави бележка"
        type="add"
        icon={iconPlus}
        width={200}
        {...this.props}
      />
    );
  }
}

export default AddNote;
