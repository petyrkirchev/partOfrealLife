/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/'; 

class SearchUsers extends Component {
    render() {

        return (
            <div>
                    <h1>Тук се търси потребители</h1>
                <Link style={{ padding: '10px'}} to={'/statistics/organizer/users/group'}>
                        <Button
                            center
                            type="warning"
                            size='md'
                            width={300}
                        >
                        Създай Група
                    </Button>
                </Link>
            </div>
        );
    }
}

export default SearchUsers;