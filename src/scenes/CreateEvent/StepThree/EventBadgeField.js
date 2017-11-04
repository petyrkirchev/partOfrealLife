/* eslint-disable */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FormGroup, InputGroup, ListGroup, ListGroupItem, FormControl} from 'react-bootstrap';

class EventBadgeField extends Component {
    render() {

        return (
            <div className="form-group">
                <h2>Значка поле</h2>
                <ListGroup>
                    <ListGroupItem>
                        <input type="checkbox" name="discount" onChange={this.props.onChange}/>
                        <label>Процент отстъпка</label>
                        <input
                            style={{
                            width: 50,
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            borderTopLeftRadius: 5,
                            borderTopRightRadius: 5
                        }}
                            type="text"
                            name="discountPorc"
                            onChange={this.props.onChange}/>%
                    </ListGroupItem>
                    <ListGroupItem>
                        <input type="checkbox" name="freeConsult" onChange={this.props.onChange}/>
                        <label>Безплатна консултация</label>
                    </ListGroupItem>
                    <ListGroupItem>
                        <input type="checkbox" name="passBackstage" onChange={this.props.onChange}/>
                        <label>Достъп до backstage</label>
                    </ListGroupItem>
                    <ListGroupItem>
                        <input type="checkbox" name="meetLectors" onChange={this.props.onChange}/>
                        <label>Лична среща с Организатор или Лектор</label>
                    </ListGroupItem>
                    <ListGroupItem>
                        <input type="checkbox" name="specialSit" onChange={this.props.onChange}/>
                        <label>Специално място/стол</label>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default EventBadgeField;
