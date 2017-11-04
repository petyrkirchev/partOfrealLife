import React, { Component } from 'react';

import ButtonDownload from '../Download';

class DownloadInvoice extends Component {
  render() {
    return (
      <ButtonDownload
        label="Изтегли фактура"
        type="invoice"
        {...this.props}
      />
    );
  }
}

export default DownloadInvoice;
