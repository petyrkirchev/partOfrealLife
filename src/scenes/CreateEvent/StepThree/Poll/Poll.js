/* eslint-disable */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DropdownC from './DropdownC';
import CheckboxC from './CheckboxC';
import RadioC from './RadioC';
import TextareaC from './TextareaC';
import {
    Form,
    FormControl,
    Button,
    FormGroup,
    InputGroup,
    Radio,
    Row,
    Col,
    Well,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

class Poll extends Component {
    constructor() {
        super();
        this.state = {
            isMandatory: false,
            poll: [],
            data: {},
            questions: [],
            question: '',
            answers: [],
            answer: '',
            type: '',
            isDone: false,
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleCheck = this
            .handleChange
            .bind(this);
        this.handleClick = this
            .handleClick
            .bind(this);
        this.handleDelete = this
            .handleDelete
            .bind(this);
        this.collectAnswers = this
            .collectAnswers
            .bind(this);
        this.helper = this
            .helper
            .bind(this);
        this.renderHelper = this
            .renderHelper
            .bind(this);
        this.handleDone = this
            .handleDone
            .bind(this);
    }
    handleDone() {

        const { poll, isMandatory } = Object.assign({}, this.state);
        return { poll, isMandatory }
    }
    helper() {
        var copy = Object.assign({}, this.state.data);
        var pollCopy = this
            .state
            .poll
            .slice()
        pollCopy.push(copy);
        this.setState({poll: pollCopy});
        this.setState({question: ''});
        this.setState({answer: ''});
        this.setState({answers: []});
    };
    renderHelper(element, index) {
        if (element.type == 'radio') {
            return <RadioC question={element.question} answers={element.answers} index={index}/>
        }
        if (element.type == 'checkbox') {
            return <CheckboxC question={element.question} answers={element.answers} index={index}/>
        }
        if (element.type == 'dropdown') {
            return <DropdownC question={element.question} answers={element.answers} index={index}/>
        }
        if (element.type == 'textarea') {
            return <TextareaC question={element.question} index={index}/>
        }
    }
    collectAnswers(e) {
        var answers = this
            .state
            .answers
            .slice();
        answers.push(this.state.answer);
        this.setState({answers})
        this.setState({answer: ''})
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleCheck(e) {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }
    handleClick(e) {
        if (!this.state.question || !this.state.type) {
            return
        } else if (this.state.answers.length > 0) {
            this.setState({
                data: {
                    type: this.state.type,
                    question: this.state.question,
                    answers: this.state.answers
                }
            }, () => {
                this.helper();
            });
        } else if (this.state.type == 'textarea') {
            this.setState({
                data: {
                    type: this.state.type,
                    question: this.state.question
                }
            }, () => {
                this.helper();
            });
        } else {
        }
    }
    handleDelete(e) {
        var answers = this
            .state
            .answers
            .slice();
        answers.splice(this.key, 1);
        this.setState({answers});
    }
    deleteQuestion(e) {
        var poll = this
            .state
            .poll
            .slice();
        poll.splice(this.key, 1);
        this.setState({poll})
    }
    render() {
        const {question, answerType, answerTypes, answer, answers} = this.state
        return (
            <FormGroup>
                <h2>Анкета</h2>
                <div>
                    <InputGroup>
                        <FormControl
                            type='text'
                            className="form-control"
                            placeholder='ВЪВЕДЕТЕ ЗАГЛАВИЕ  НА ВЪПРОСА'
                            name='question'
                            value={question}
                            onChange={this.handleChange}/>
                        <InputGroup.Addon>?</InputGroup.Addon>
                    </InputGroup>
                    <h3>Изберете тип отговор:</h3>
                    <FormGroup>
                        <Radio inline value={'radio'} name='type' onChange={this.handleChange}>
                            Радио бутон
                        </Radio>
                        {' '}
                        <Radio inline value={'checkbox'} name='type' onChange={this.handleChange}>
                            Чекбокс бутон
                        </Radio>
                        {' '}
                        <Radio inline value={'dropdown'} name='type' onChange={this.handleChange}>
                            Падащо меню
                        </Radio>
                        {' '}
                        <Radio inline value={'textarea'} name='type' onChange={this.handleChange}>
                            Свободен текст
                        </Radio>
                    </FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            className="form-control"
                            placeholder='ВЪВЕДЕТЕ ОТГОВОР НА ВЪПРОСА'
                            name='answer'
                            value={answer}
                            onChange={this.handleChange}/>
                        <InputGroup.Button>
                            <Button onClick={this.collectAnswers}>Добави отговор</Button>
                        </InputGroup.Button>
                    </InputGroup>
                    <ListGroup>
                        {this
                            .state
                            .answers
                            .map((element, index) => {
                                return <ListGroupItem key={index}>
                                    <InputGroup>{' '}Oтговор{' '} #{index+1}:{' '}{element}
                                        <InputGroup.Button>
                                            <Button onClick={this.handleDelete}>Премахване</Button>
                                        </InputGroup.Button>
                                    </InputGroup>
                                </ListGroupItem>
                            })  
                        }
                    </ListGroup>

                    <Button inline onClick={this.handleClick}>Добави въпрос</Button>
                    <Radio
                        className='pull-right'
                        inline
                        name='isMandatory'
                        onChange={this.handleChange}>Анкетата е задължителна при покупка</Radio>
                    <br/>
                </div>
                <Well bsSize="small">
                    <ListGroup>
                    {this
                        .state
                        .poll
                        .map((element, index) => {
                            return this.renderHelper(element, index);
                        })}
                        </ListGroup>
                </Well>
                <Button className='pull-right' onClick={this.handleDone}>ГОТОВО</Button>
            </FormGroup>
        );
    }
}

export default Poll;
