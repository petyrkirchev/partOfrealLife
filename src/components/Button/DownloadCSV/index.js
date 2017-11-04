import React, { Component } from 'react';

import ButtonDownload from '../Download';
import iconCsv from '../../../images/icon__csv.svg';

class DownloadCSV extends Component {
  render() {
    return (
      <ButtonDownload
        label="Изтегли CSV"
        type="csv"
        icon={iconCsv}
        width={154}
        {...this.props}
      />
    );
  }
}

export default DownloadCSV;
