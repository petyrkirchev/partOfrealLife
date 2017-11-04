/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slide from '../../components/Slide';
import Table from '../../components/Table';
import Steps from '../../components/Steps';
import Tabs from '../../components/Tabs';

import eventProgram from '../../data/events.json';

class Tickets extends Component {
  constructor() {
    super();

    this.state = {
      program: eventProgram[0].program,
      day: 0,
    };

    this.generateTabs = this.generateTabs.bind(this);
  }

  generateTabs() {
    let tabs = {};

    this.state.program.dates.map((date, index) => {
      Object.assign(tabs, {}, {
        [date.date]: {
          label: date.label,
          onClick: () => {
            this.setState({
              day: index,
            });
          }
        }
      });
    });

    return tabs;
  }

  generateStepsData(data) {
    let stepData = {};

    Object.keys(data).map((key) => {
      Object.assign(stepData, {}, {
        [key]: {
          name: data[key].hour,
          label: data[key].topic,
          desc: data[key].host,
        }
      });
    });

    return stepData;
  }

  render() {
    const { editable } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div className="m-b-sm">
            <Slide step={120}>
              <Tabs
                fontSize={0.75}
                width={120}
                height={30}
                tabs={this.generateTabs()}
              />
            </Slide>
          </div>
          <Table headings={this.state.program.headings} data={this.state.program.dates[this.state.day].hours} />
        </div>
        <div className="col-xs-12 col-md-6">
          <Steps steps={this.generateStepsData(this.state.program.dates[this.state.day].hours)} />
        </div>
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
