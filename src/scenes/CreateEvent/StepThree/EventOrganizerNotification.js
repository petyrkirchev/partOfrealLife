/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventOrganizerNotification extends Component {
    render() {

        return (
            <div className="form-group">
                <input type="checkbox" name="organizerNotification" onChange={this.props.onChange}/>
                <label>Нотификация към ОРГАНИЗАТОРА при покупка на билет</label>
            </div>
        );
    }
}

export default EventOrganizerNotification;
