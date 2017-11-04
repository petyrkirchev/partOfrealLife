/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventAdditionalInfo extends Component {

    render() {
        return (
            <div className="form-group">
                <h2>Допълнително информация</h2>
                <textarea className="form-control" rows="5" name='additionalInfo' onChange={this.props.onChange} />
            </div>
        );
    }
}

export default EventAdditionalInfo;
