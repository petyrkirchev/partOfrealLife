/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/';
import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';

class Poll extends Component {
    render() {

        return (
            <div style={{ background: '#736357', color:"white",font:'Roboto'}}>
                <Header fixed />
                <div style={{ height: '375px' }}>
                    <h1 style={{ marginTop: '100px' }}>Анкета</h1>
                    <h3>Тук ще има анкета</h3>
                </div>
                <div>
                    <h1 style={{ margin:'0 auto' }}>Начин на плащане</h1>
                    <ul  style={{ listStyle:'none', display:"inline-flex"}}>
                        <li style={{ padding: '10px'}}>
                            <Link to={'/event/invoice/data'}>
                                <Button
                                    center
                                    type="warning"
                                    size='md'
                                    width={200}
                                >
                                    PayPal
                                </Button>
                            </Link>
                        </li>
                        <li style={{ padding: '10px'}}>
                            <Link to={'/event/invoice/data'}>
                                <Button
                                    center
                                    type="warning"
                                    size='md'
                                    width={200}
                                >
                                    Epay.bg
                                </Button>
                            </Link>
                        </li>
                        <li style={{ padding: '10px'}}>
                            <Link to={'/event/invoice/data'}>
                                <Button
                                    center
                                    type="warning"
                                    size='md'
                                    width={200}
                                >
                                    Visa
                                </Button>
                            </Link>
                        </li>
                        <li style={{ padding: '10px'}}>
                            <Link to={'/event/invoice/data'}>
                                <Button
                                    center
                                    type="warning"
                                    size='md'
                                    width={200}
                                >
                                    Easypay
                                </Button>
                            </Link>
                        </li>
                        <li style={{ padding: '10px'}}>
                            <Link to={'/event/invoice/data'}>
                                <Button
                                    center
                                    type="warning"
                                    size='md'
                                    width={200}
                                >
                                    B-pay
                                </Button>
                            </Link>
                        </li>
                        <li style={{ padding: '10px'}}>
                            <Link to={'/event/invoice/data'}>
                                <Button
                                    center
                                    type="warning"
                                    size='md'
                                    width={200}
                                >
                                    Bank Transfer
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Navigation />
                <Footer />
            </div>
        );
    }
}

export default Poll;