/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import Header from '../Header/';
import Navigation from '../Navigation/';
import Footer from '../Footer/';
import contactMapImg from '../../../public/assets/images/contact-map.png';

class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            userEmail: '',
            userMessage: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick(){
        const data= Object.assign({},this.state);
        return data;
    }
    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Row>
                        <Col md={12} >
                            <Row>
                                <Col sm={6} md={5} mdOffset={1}>
                                    <h2><strong>СВЪРЖЕТЕ СЕ С НАС!</strong></h2>
                                    <Row style={{marginTop:'20px', marginBottom:'20px'}}><Col ><FormControl type='email' placeholder='Е-mail' onChange={this.handleChange} /></Col></Row>

                                    <Row style={{marginTop:'20px', marginBottom:'20px'}}><Col><FormControl componentClass='textarea' rows={6} placeholder='Вашето съобщение' onChange={this.handleChange} /></Col></Row>
                                    <Row><Col><Button bsStyle='success pull-right' onClick={this.handleClick}>ИЗПРАТИ</Button></Col></Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col sm={6} md={5} mdOffset={1}>
                                            <h2><strong>КАК ДА ПОЛЗВАМ СЪБИТИЕ.БГ?</strong></h2>
                                            <p><span style={{ color: '#999999' }}><span style={{ fontSize: '13px' }}>Ако имате въпроси относно ползването на Събитие.БГ или желаете да се свържете с нас във връзка с партньорство или друг вид сътрудничество, можете да го направите чрез формата от ляво.</span></span></p>
                                            <p><span style={{ color: '#999999' }}><span style={{ fontSize: '13px' }}>Моля въведете и контакти за обратна връзка, за да можем да се свържем с Вас.</span></span></p>
                                            <div><strong>Уеб Дайрект ЕООД</strong></div>
                                            <div><strong>ЕИК:</strong> 200830731</div>
                                            <div><strong>ИН по ДДС:</strong> BG200830731</div>
                                            <div>София 1606 ул. Св. Иван Рилски 34</div>
                                            <div><strong>МОЛ:</strong> Георги Христулев</div>
                                            <div>за връзка използвайте формата или пишете на</div>
                                            <div><Link to='/' style={{ color: '#128ce2', cursor: 'pointer' }}>info@sabitie.bg</Link></div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <img style={{ float: 'right' }} src={contactMapImg} />
                        </Col>
                    </Row>
                </Grid>
                <Navigation />
                <Footer />
            </div>
        );
    }
}

export default ContactUs;