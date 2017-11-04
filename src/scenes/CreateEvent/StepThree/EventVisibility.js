/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventVisibility extends Component {
    render() {
        return (
            <div className="form-group">
                <h2>Видимост:*</h2>
                <p>
                    Mоже да направите Вашето събитие частно,
     то няма да присъства в нашия каталог,
      но ако е видимо ще може да е достъпно
       до повече хора и ще получите допълнително
        посещения чрез оптимизацията ни в Google
                </p>
                <form>
                    <label>
                    <input type="radio" name="visibility" value={'public'} onChange={this.props.onChange}/>
                    Събитието е публично и ще се показва в избраните категориите и при резултатите в търсенето
                    </label>
                    <label>
                    <input type="radio" name="visibility" value={'private'} onChange={this.props.onChange} />
                    Събитието е частно и няма да се показва в категориите и при резултатите в търсенето
                    </label>
                </form>
            </div>
        );
    }
}

export default EventVisibility;
