/* eslint-disable */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MyEvents from './MyEvents';
import {getMyEvents} from './actions/';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            message: ''
        };
    }
    componentDidMount() {
         this.setState({message: ''})
        getMyEvents((resp) => {
            if (!resp.success) {
                this.setState({message: resp.fail})
            }else
            this.setState({events: resp.events})
        })
    }
    render() {

        return (
            <div>Тук се намират моите събития
                <MyEvents message={this.state.message} events={this.state.events[0]}/>
            </div>
        );
    }
}

export default Events;