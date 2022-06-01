import React from "react";

import "./Nav.css";
import iconMail from "../../assets/icons/mail.svg";
import iconPhone from "../../assets/icons/phone.svg";
import iconPlus from "../../assets/icons/plus.svg";
import iconAlert from "../../assets/icons/alert.svg";
import counterparties from "../../assets/icons/counterparties.svg";
import logo from "../../assets/images/logo.svg";

const Nav = () => {
    return (
        <div className="page__nav">
            <nav className="nav">
                <div className="nav__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav__main">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/" className="nav__link">
                                <div className="nav__icon">
                                    <img src={iconMail} alt="mail" />
                                </div>
                                <span className="nav__link-text">
                                    Сообщения
                                </span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link nav__link--active">
                                <div className="nav__icon">
                                    <img src={iconPhone} alt="phone" />
                                </div>
                                <span className="nav__link-text">Звонки</span>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link">
                                <div className="nav__icon">
                                    <img
                                        src={counterparties}
                                        alt="counterparties"
                                    />
                                </div>
                                <span className="nav__link-text">
                                    Контрагенты
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav__buttons">
                    <button className="btn btn-primary">
                        <span className="btn__text">Добавить заказ</span>
                        <img src={iconPlus} alt="plus" />
                    </button>
                    <button className="btn btn-primary">
                        <span className="btn__text">Оплата</span>
                        <img src={iconAlert} alt="alert" />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
