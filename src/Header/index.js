import React from "react";
import useCurrentDate from "./useCurrentDate";
import "./style.css";

const dateFormat = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

const Header = () => {
const date = useCurrentDate();

    return (
        <div className="header">
            <p className="header__date">Dzisiaj jest {date.toLocaleDateString(undefined, dateFormat)}</p>
            <h1 className="header__paragraph">Kantor wymiany walut</h1>
        </div>
    )
};

export default Header;