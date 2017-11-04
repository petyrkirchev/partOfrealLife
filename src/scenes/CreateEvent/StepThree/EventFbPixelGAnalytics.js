/* eslint-disable */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FormGroup, InputGroup, FormControl, ControlLabel} from 'react-bootstrap';

class EventFbPixelGAnalytics extends Component {
    render() {

        return (
            <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>Facebook Pixel</InputGroup.Addon>
                        <FormControl type="text" name="fbPixel" onChange={this.props.onChange}/>
                    </InputGroup>
                  <InputGroup>
                        <InputGroup.Addon>Google Analytics</InputGroup.Addon>
                        <FormControl type="text" name="gAnalitics" onChange={this.props.onChange}/>
                    </InputGroup>
            </FormGroup >
        );
    }
}

export default EventFbPixelGAnalytics;
