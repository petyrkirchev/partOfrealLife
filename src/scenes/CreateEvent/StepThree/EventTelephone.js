/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventTelephone extends Component {
    render() {

        return (
            <div className="form-group">
                <label>Въведете вашият телефонен номер за връзка*</label>
                <p className="input-group">
                    <span className="input-group-addon">&nbsp;+359</span>
                    <input className="form-control" placeholder="881234567" name="telephone" type="text" onChange={this.props.onChange}/>
                </p>

            </div>
        );
    }
}

export default EventTelephone;
