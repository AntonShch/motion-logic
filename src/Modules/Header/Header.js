import React, {Component} from 'react';
import logo from '../../logo.svg'
import './Header.scss';

class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="header__wrapper">
                    <a href="https://motionlogic.ru" target={'_blank'} className={'header__logo'}><img src={logo} alt="logo"/></a>
                    <p>Тестовое задание для Motion Logic от Щербина Антона</p>
                </div>
            </header>
        );
    }
}

export default Header;
