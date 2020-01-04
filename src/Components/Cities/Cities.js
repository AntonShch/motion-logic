import React, {Component} from 'react';
import CitiesList from "../CitiesList";
import CitiesSearch from "../CitiesSearch";
import './Cities.scss';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let citiesFromCookie;

if (cookies.get('cities')) {
    citiesFromCookie  = cookies.get('cities');
}


class Cities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: citiesFromCookie || ['Екатеринбург', 'Москва', 'Челябинск'],
        };
    }

    addCity = (city) => {
        this.setState({
            cities: [...this.state.cities, city]
        }, () => cookies.set('cities', JSON.stringify(this.state.cities), { path: '/' }))
    }

    removeCity = (indexCity) => {
        this.setState(prevState => ({
            cities: prevState.cities.filter((el, index) => index !== indexCity)
        }), () => cookies.set('cities', JSON.stringify(this.state.cities), { path: '/' }))
    }

    render() {
        return (
            <div className={'cities'}>
                <div className={'cities__wrapper'}>
                    <CitiesSearch cities={this.state.cities} addCity={(city) => this.addCity(city)}/>
                    <CitiesList cities={this.state.cities} removeCity={(indexCity) => this.removeCity(indexCity)}/>
                </div>
            </div>
        );
    }
}

export default Cities;
