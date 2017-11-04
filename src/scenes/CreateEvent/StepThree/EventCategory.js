/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventCategory extends Component {
    constructor() {
        super();
        this.createSubCategory = this.createSubCategory.bind(this);
    }
    createSubCategory() {
        if (!this.props.category) {
            return
        } else {
            return (
                <div className="col-md-2">
                    <select name="subCategory" className="form-control mt10" onChange={this.props.onChange}>
                        <option value={null}>-- Подкагория --</option>
                        <option value="Концерти и музика">Концерти и музика</option>
                        <option value="Конференции и семинари">Конференции и семинари</option>
                        <option value="Инициативи">Инициативи</option>
                        <option value="Изложби">Изложби</option>
                        <option value="Запознанства">Запознанства</option>
                        <option value="Дегустации">Дегустации</option>
                        <option value="Бизнес">Бизнес</option>
                        <option value="Култура и театър">Култура и театър</option>
                        <option value="Курсове и обучения">Курсове и обучения</option>
                        <option value="Нетуъркинг">Нетуъркинг</option>
                        <option value="Партита">Партита</option>
                        <option value="Промоции и презентации">Промоции и презентации</option>
                        <option value="Социални събития">Социални събития</option>
                        <option value="Спортни">Спортни</option>
                    </select>
                </div>
            )
        }
    }
    render() {

        return (
            <div className="form-group">
                <h2>Категория*</h2>
                <div className="col-md-2">
                    <select name="category" className="form-control mt10" onChange={this.props.onChange}>
                        <option value={null}>-- Изберете --</option>
                        <option value="Концерти и музика">Концерти и музика</option>
                        <option value="Конференции и семинари">Конференции и семинари</option>
                        <option value="Инициативи">Инициативи</option>
                        <option value="Изложби">Изложби</option>
                        <option value="Запознанства">Запознанства</option>
                        <option value="Дегустации">Дегустации</option>
                        <option value="Бизнес">Бизнес</option>
                        <option value="Култура и театър">Култура и театър</option>
                        <option value="Курсове и обучения">Курсове и обучения</option>
                        <option value="Нетуъркинг">Нетуъркинг</option>
                        <option value="Партита">Партита</option>
                        <option value="Промоции и презентации">Промоции и презентации</option>
                        <option value="Социални събития">Социални събития</option>
                        <option value="Спортни">Спортни</option>
                    </select>
                </div>
                {this.createSubCategory()}
            </div>
        );
    }
}

export default EventCategory;
