/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EventInvoice extends Component {
    render() {

        return (
            <div className="form-group">
                <label>
                    <input type="checkbox" name="collectInvoiceData" onChange={this.props.onChange}/>
                    Събиране на данни за фактуриране.
                <br />
                </label>
                <p> Тези настройки ви позволяват да изберете по какъв начин да се издават фактурите към сайта.</p>
                <br />
                <p><strong>Не е препоръчително да променяте тези настройки след одобрение на вашето събитие.</strong></p>
                <br />
                <label>
                    <input type="radio" name="collectInvoiceDataChoice" value="auto" onChange={this.props.onChange}/>
                    Автоматично фактуриране от името на Събитие.БГ
                <br />
                </label>
                <p> По този начин фактурите ще се издават автоматично от нашата система ,от името на сайта
                    като платена услуга - <strong>1.20лв. СДДС за фактура (включва всички административни разходи)</strong>
                    Възможно е само за ФИРМИ регистрирани по ЗДДС
                        </p>
                <br />
                <label>
                    <input type="radio" name="collectInvoiceDataChoice" value="custom" onChange={this.props.onChange}/>
                    Автоматично фактуриране през системата на Събитие.БГ от името на Организатора.
                    <br />
                </label>
                <p >
                    Тази опция позволява ние да издаваме фактури от името на вашата фирма, чрез нашата система.
                Вие сте задали номера от който да започват фактурите във вашия акаунт и те ще следват тази номерация.
                <p>
                        <strong>Услугата е платена 0.60лв. с ДДС за брой фактура.</strong> И е безплатна клиенти на партньорска счетоводна къща QBS.Bg
                </p>
                </p>
                <br />
                <label>
                    <input type="radio" name="collectInvoiceDataChoice" value="collection" onChange={this.props.onChange}/>
                    Събиране на данни от потребителите при покупка на билет.
                    </label>
                <br />
                <p> Чрез тази опция ние ще събираме данни за фактуриране и ще може да ги свалите в последствие,
                        но няма да бъдат издавани фактури чрез системата на сайта и вие се задължавате сами
                         да изпратите фактурите на вашите клиенти <p>безплатно.</p></p>

            </div>
        );
    }
}

export default EventInvoice;
