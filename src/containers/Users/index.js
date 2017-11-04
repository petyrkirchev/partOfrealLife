/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/'; 

class Users extends Component {
    render() {

        return (
            <div>
                    <h1>Тук се намират потребителите</h1>
                <Link style={{ padding: '10px'}} to={'/statistics/organizer/users/search'}>
                        <Button
                            center
                            type="warning"
                            size='md'
                            width={300}
                        >
                        Търсене на потребителите
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Users;