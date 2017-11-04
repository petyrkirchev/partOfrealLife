import React, { Component } from 'react';

import ButtonDownload from '../Download';
import iconPdf from '../../../images/icon__pdf.svg';

class DownloadPDF extends Component {
  render() {
    return (
      <ButtonDownload
        label="Изтегли PDF"
        type="pdf"
        icon={iconPdf}
        width={154}
        {...this.props}
      />
    );
  }
}

export default DownloadPDF;
