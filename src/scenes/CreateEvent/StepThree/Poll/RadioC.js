/* eslint-disable */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class RadioC extends Component {
    render() {
        return (
            <div key={this.props.index}>
                <h3>{this.props.index + 1}.{this.props.question}</h3>
                {this
                    .props
                    .answers
                    .map((element, index) => {
                        return <p key={index}>{this.props.index + 1}.{index + 1}<input type='radio' name={this.props.question} value={element}/>{element}</p>
                    })
}
            </div>
        );
    }
}

export default RadioC;
