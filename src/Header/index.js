import React, { useState, useEffect } from "react";
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
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const myDate = new Date();
            setCurrentDate(myDate);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    });

    return (
        <div className="header">
            <p className="header__date">Dzisiaj jest {currentDate.toLocaleDateString(undefined, dateFormat)}</p>
            <h1 className="header__paragraph">Kantor wymiany walut</h1>
        </div>
    )
};

export default Header;