/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class TextareaC extends Component {
    render() {
        return (
            <FormGroup controlId="formControlsTextarea" key={this.props.index}>
                <ControlLabel>{this.props.index + 1}.{this.props.question}</ControlLabel>
                <FormControl componentClass="textarea" placeholder='' name={this.props.question}/>
            </FormGroup>
        );
    }
}

export default TextareaC;
