/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/';
import Header from '../Header';
import Navigation from '../Navigation';
import Footer from '../Footer';

class DataForBuy extends Component {
    render() {
        return (
            <div style={{ background: '#736357', color:"white",font:'Roboto'}}>
                <Header fixed/>
                <div style={{ height: '400px' }}>
                    <h1 style={{ marginTop: '100px' }}>Данни за покупка</h1>
                </div>
                 <Link to={'/event/purchase/done'} style={{ padding: '10px'}} >
                        <Button
                            center
                            type="warning"
                            size='md'
                            width={200}
                        >
                        Купи билет
                    </Button>
                </Link>
                <Navigation />
                <Footer />
            </div>
        );
    }
}

export default DataForBuy;