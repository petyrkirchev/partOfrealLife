/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/'; 
import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';

class BuyTickets extends Component {
    render() {

        return (
            <div style={{ background: '#736357', color:"white",font:'Roboto'}}>
                <Header fixed/>
                <div style={{ height: '400px' }}>
                    <h1 style={{ marginTop: '100px' }}>Тук се купува билет</h1>
                </div>
                <Link style={{ padding: '10px'}} to={'/event/place/selector'}>
                        <Button
                            center
                            type="warning"
                            size='md'
                            width={300}
                        >
                        Връзка към местата в залата
                    </Button>
                </Link>
                <Navigation />
                <Footer />
            </div>
        );
    }
}

export default BuyTickets;
