/* eslint-disable */
import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Button from '../../components/Button/'; 
import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';

class PlaceSelector extends Component {
    render() {

        return (
            <div style={{ background: '#736357', color:"white",font:'Roboto'}}>
                <Header  fixed/>
                <div style={{ height: '400px' }}>
                    <h1 style={{ marginTop: '100px' }}>Избор на място</h1>
                </div>
                <Link  to={'/event/poll/methods'} style={{ padding: '10px'}}>
                        <Button
                            center
                            type="warning"
                            size='md'
                            width={400}
                        >
                        Връзка към Анкетата и начините за плащане
                    </Button>
                </Link>
                <Navigation />
                <Footer />
            </div>
        );
    }
}

export default PlaceSelector;