/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/'; 
import Header from '../Header/index';

class Mail extends Component {
    render() {

        return (
            <div>
                    <h1>Тук се изпраща съобщение</h1>
                                <Link style={{ padding: '10px'}} to={'/statistics/events/mail/send'}>
                        <Button
                            center
                            type="warning"
                            size='md'
                            width={400}
                        >
                        Връзка към формата за съобщението
                    </Button>
                </Link>
                                <Link style={{ padding: '10px'}} to={'/statistics/events/mail/poll'}>
                        <Button
                            center
                            type="warning"
                            size='md'
                            width={400}
                        >
                        Връзка към статистиката
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Mail;