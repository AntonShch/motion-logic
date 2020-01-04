import React, {Component} from 'react';
import './CitiesSearch.scss';
import citiesAPI from '../../russia'

class CitiesSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: false,
            errorText: 'Ошибка.',
            citiesAPI: citiesAPI,
            autoComplete: '',
        };
    }

    handleChange = event => {
        let valueInput = event.target.value;
        this.setState({value: valueInput});
        this.autoCompleter(valueInput);
        if (!valueInput) {
            this.setState({error: false});
        }
    }


    addToList = (value) => event => {
        let result;

        if (value) {
            result = value;
        } else if (this.state.value) {
            result = this.state.citiesAPI.find(element => element.city.toLowerCase().indexOf(this.state.value.toLowerCase()) === 0);
            if(result) {
                result = result.city;
            };
        }

        if (this.props.cities.indexOf(result) === -1 && result) {
            this.props.addCity(result);
            this.setState({error: false, value: ''});
            this.autoCompleter(0)
        } else {
            if (this.props.cities.indexOf(result) !== -1) {
                this.setState({error: true,errorText: 'Ошибка. Такой город уже есть в списке'});
            } else {
                this.setState({error: true,errorText: 'Ошибка. Некорректное значение'});
            }
        }

        event.preventDefault();
    }

    autoCompleter = (value) => {

        let citiesAPI = 0;

        if (value.length >= 3) {
            citiesAPI = this.state.citiesAPI.filter(element => element.city.toLowerCase().indexOf(value.toLowerCase()) > -1);
        }  else {
            citiesAPI = 0;
        }

        this.setState( prevState => ({
            autoComplete: this.renderAutoCompleter(citiesAPI),
        }))

    }


    renderAutoCompleter = (value) => {
        return Object.entries(value).map(([key, value], i) => {
            return <li key={key} onClick={this.addToList(value.city)}>{value.city}</li>
        })
    }

    render = () => {
        let errorText;
        if (this.state.error) {
            errorText = <p className="cities-search__error">{this.state.errorText}</p>;
        } else {
            errorText = '';
        }
        return (
            <form action={'/test.js'} className={this.state.error ? 'cities-search cities-search--error' : 'cities-search'}>
                <div className="cities-search__wrapper">
                    {errorText}
                    <input value={this.state.value}
                           type={'text'}
                           className={'custom-input cities-search__input'}
                           placeholder={'Введите название города'}
                           onChange={this.handleChange}/>
                    <div className="cities-search__autocompleter" >
                        <ul>
                            {this.state.autoComplete}
                        </ul>
                    </div>
                    <button type={'submit'}
                            className={'button cities-search__button'}
                            onClick={this.addToList()}>
                        Добавить в список
                    </button>
                </div>
            </form>
        );
    }
}

export default CitiesSearch;
