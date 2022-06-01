import React from "react";

import iconSearch from "../../assets/icons/search.svg";
import iconCaret from "../../assets/icons/caret_down.svg";

const MainHeader = () => {
    return (
        <header className="main__header">
            <div className="header container">
                <div className="header__date">
                    <p className="header__date-text">Среда 13 окт</p>
                </div>
                <div className="header__analytics analytics">
                    <div className="analytics__item">
                        <p className="analytics__text">
                            Новые звонки
                            <span className="analytics__text--green">
                                20 из 30 шт
                            </span>
                        </p>
                        <div className="analytics__progress analytics__progress--green"></div>
                    </div>
                    <div className="analytics__item">
                        <p className="analytics__text">
                            Качество разговоров
                            <span className="analytics__text--yellow">40%</span>
                        </p>
                        <div className="analytics__progress analytics__progress--yellow"></div>
                    </div>
                    <div className="analytics__item">
                        <p className="analytics__text">
                            Конверсия в заказ
                            <span className="analytics__text--red">67%</span>
                        </p>
                        <div className="analytics__progress analytics__progress--red"></div>
                    </div>
                </div>
                <div className="header__search">
                    <img src={iconSearch} alt="search" />
                </div>
                <div className="header__company">
                    <p className="header__company-text">
                        ИП Сидорова Александра Михайловна
                    </p>
                    <div className="header__company-icon">
                        <img src={iconCaret} alt="caret" />
                    </div>
                </div>
                <div className="header__user-settings">
                    <div className="header__user-picture">
                        <img
                            height={40}
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.emmegi.co.uk%2Fwp-content%2Fuploads%2F2019%2F01%2FUser-Icon.jpg&f=1&nofb=1"
                            alt="user"
                        />
                    </div>
                    <div className="header__company-icon">
                        <img src={iconCaret} alt="caret" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
