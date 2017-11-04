/* eslint-disable */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Grid,
    Row,
    Col,
    Panel,
    Button,
    ButtonGroup,
    ButtonToolbar,
    SplitButton,
    Dropdown,
    MenuItem,
    Pagination,
    Pager,
    PageItem
} from 'react-bootstrap';
import classNames from 'classnames';
import {getMyEvents} from '../Events/actions/';
import { checkUserEmail, promoteUserToPiar } from './actions/';

var contains = function (needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if (!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (needle) {
            var i = -1,
                index = -1;

            for (i = 0; i < this.length; i++) {
                var item = this[i];

                if ((findNaN && item != item) || item == needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};
class PR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            selectedForPR: [],err:'',email:'',disabled:true,checking:false,usernameOfPiar:''
        };
        this.handleSelect = this
            .handleSelect
            .bind(this);
            this.handleBlur=this.handleBlur.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
        promoteUserToPiar({
            eventIds:this.state.selectedForPR.toString(),
            userEmail:this.state.email,
            usernameOfPiar:this.state.usernameOfPiar
        },(resp=>{
            if(resp.success){
                this.props.history.push('/statistics/news')
            }
        }))
    }
    componentDidMount() {
        getMyEvents((resp) => {
            this.setState({events: resp.events[0]})
        })
    }

    handleBlur(e){
        this.setState({
            err:'',checking:true
        });
        const email=e.target.value;
        checkUserEmail({
            email
        },(resp=>{
            if(!resp.valid){
                this.setState({
                    err:resp.message,disabled:true,checking:false
                })
            }else{
                this.setState({
                    email,disabled:false,checking:false,usernameOfPiar:resp.username
                })
            }
        }));
    }
    handleSelect(e) {
        if (e.target.name == 'all') {
           
            this.setState({
                selectedForPR: this
                    .state
                    .events
                    .map(ev=>ev.id)
            })
            return;
        }
        if (contains.call(this.state.selectedForPR, Number(e.target.name))) {
            this.setState({
                selectedForPR: this
                    .state
                    .selectedForPR
                    .filter(ev => ev !== Number(e.target.name))
            })
            return;
        }
        var arr = this
            .state
            .selectedForPR
            .slice();
        arr.push(Number(e.target.name))
        this.setState({selectedForPR: arr})
    }
    render() {
            const { history } = this.props;
        return (
            <div>
                <h1>Тук се добавя PR
                </h1>
                <Row>
                    <Col md={3}>
                        <h1>
                            Въведете email:</h1>
                    </Col>
                    <Col md={3}>
                        <input onBlur={this.handleBlur} type='text'/>
                       <div> {this.state.err&&this.state.err}</div>
                       <div> {this.state.checking&&'Checking your email...'}</div>
                    </Col>
                    <Col md={3}>
                        <Dropdown id="dropdown-custom-1">
                            <Dropdown.Toggle>
                                {'Изберете евент: '}
                            </Dropdown.Toggle>
                            <Dropdown.Menu className={classNames('animated', 'fadeInDown')}>
                                <MenuItem eventKey="1" name='all'   onClick={this.handleSelect}>Всички</MenuItem>
                                <MenuItem divider/> {this.state.events.length === 0
                                    ? null
                                    : this
                                        .state
                                        .events
                                        .map(e => {
                                            var isSelected = contains.call(this.state.selectedForPR, e.id)
                                            return <MenuItem
                                              
                                                onClick={this.handleSelect}
                                                active={isSelected}
                                                name={e.id}
                                                eventKey={e.id}>{e.title}</MenuItem>

                                        })}

                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={3}>
                        <Button onClick={this.handleSubmit} disabled={this.state.disabled}>Повърди</Button>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default PR;