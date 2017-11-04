import React, { Component } from 'react';

import ButtonDownload from '../Download';

class DownloadTickets extends Component {
  render() {
    return (
      <ButtonDownload
        label="Изтегли билети"
        type="tickets"
        {...this.props}
      />
    );
  }
}

export default DownloadTickets;
