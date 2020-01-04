import React, {Component} from 'react';
import './CitiesList.scss';

class CitiesList extends Component {

    removeItemList = (key) => {
        this.props.removeCity(key);
    }

    render() {
        if (this.props.cities.length >= 1) {
            return (
                <div className={'cities-list'}>
                    <ul className={'cities-list__wrapper'}>
                        {this.props.cities.map((item, index) => (
                            <li key={index} className={'cities-item'}>
                                <p className={'cities-item__name'}>{item}</p>
                                <span className={'cities-item__remove'} onClick={() => this.removeItemList(index)}>×</span>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <p>Городов больше нет</p>
            )
        }

    }
}

export default CitiesList;
