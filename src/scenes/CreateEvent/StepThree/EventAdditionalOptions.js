/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventAdditionalOptions extends Component {
    render() {

        return (
            <div className="form-group mt10">
                <h2>Допълнителни опции:</h2>
                <label>
                    <input type="checkbox" name="additionalShowRemainingTickets" onChange={this.props.onChange} />
                    Показване на броя на оставащите билети.
                        <br />
                </label>
                <p>Tази информация ще е публично достъпна</p>
                <label>
                    <input type="checkbox" name="additionalShowParticipantList" onChange={this.props.onChange} />
                    Показване на списъка с участниците.
            <br />

                </label>
                <p>Всички хора ще могат да виждат списък
                                         участниците в събитието (ако активирате тази опция е желателно да я опишете и в информацията за събитието)</p>
                <label>
                    <input type="checkbox" name="additionalShowSocial" onChange={this.props.onChange} />
                    Показване на иконки за споделяне в социални мрежи.
            <br />

                </label>
                <p>В заглавната част на вашето събитие ще се показват иконки,
                                                 чрез които то може да бъде споделяно в най-популярните социални мрежи</p>
            </div>
        );
    }
}

export default EventAdditionalOptions;
