import React from "react";

import iconSearch from "../../assets/icons/search.svg";
import iconCaret from "../../assets/icons/caret_down.svg";

const Filter = () => {
    return (
        <div className="main__block filter">
            <div className="filter__search">
                <img src={iconSearch} alt="search" />
                <p className="filter__text">Поиск по звонкам</p>
            </div>
            <div className="filter__types">
                <div className="filter__type">
                    <p className="filter__text">Все типы</p>
                    <img src={iconCaret} alt="caret" />
                </div>
                <div className="filter__type">
                    <p className="filter__text">Все сотрудники</p>
                    <img src={iconCaret} alt="caret" />
                </div>
                <div className="filter__type">
                    <p className="filter__text">Все звонки</p>
                    <img src={iconCaret} alt="caret" />
                </div>
                <div className="filter__type">
                    <p className="filter__text">Все источники</p>
                    <img src={iconCaret} alt="caret" />
                </div>
                <div className="filter__type">
                    <p className="filter__text">Все оценки</p>
                    <img src={iconCaret} alt="caret" />
                </div>
                <div className="filter__type">
                    <p className="filter__text">Все ошибки</p>
                    <img src={iconCaret} alt="caret" />
                </div>
            </div>
        </div>
    );
};

export default Filter;
