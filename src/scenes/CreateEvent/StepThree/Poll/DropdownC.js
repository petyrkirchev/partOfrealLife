/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DropdownC extends Component {
    render() {
        return (
            <div key={this.props.index}>
                <h3>{this.props.index+1}.{this.props.question+1}</h3>
                <select>
                    {this.props.answers.map((element, index) => {
                        return <option key={index} value={element}>{element}</option>
                    })
                    }
                </select>
            </div>
        );
    }
}

export default DropdownC;
