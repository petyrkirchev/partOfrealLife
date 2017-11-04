/* eslint-disable */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import EventPrMember from './EventPrMember';
import {
    FormControl,
    FormGroup,
    Button,
    InputGroup,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

class EventPr extends Component {
    constructor() {
        super();
        this.state = {
            prMembers: [],
            prName: ''
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleClick = this
            .handleClick
            .bind(this);
        this.handleDelete = this
            .handleDelete
            .bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleClick(e) {
        var prMembers = this
            .state
            .prMembers
            .slice();
        prMembers.push(this.props.prName);
        this.setState({prMembers})
    }
    handleDelete(e) {
        var prMembers = this
            .state
            .prMembers
            .slice();
        prMembers.splice(this.key, 1);
        this.setState({prMembers})
    }

    render() {
        const {prMembers} = this.state
        return (
            <FormGroup>
                <h2>Добавяне на пияр към събитието:</h2>
                <InputGroup>
                    <InputGroup.Addon>Име на потребителя:</InputGroup.Addon>
                    <FormControl
                        type='text'
                        className="form-control"
                        name='prName'
                        onChange={this.props.onChange}/>
                    <InputGroup.Button>
                        <Button onClick={this.handleClick}>Добави</Button>
                    </InputGroup.Button>
                </InputGroup>
                <br/>
                <ListGroup>
                    {prMembers.map((element, index) => {
                        return <ListGroupItem key={index}>
                            <InputGroup>{' '}#{' '}{index+1}{' '}:
                                {element}
                                <InputGroup.Button>
                                    <Button onClick={this.handleDelete}>Премахване</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </ListGroupItem>
                    })
}
                </ListGroup>
            </FormGroup>
        );
    }
}

export default EventPr;
