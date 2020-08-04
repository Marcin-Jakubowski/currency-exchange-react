import React, { useState, useEffect } from "react";
import "./style.css";

const Header = () => {
    const [currentDate, setCurrentDate] = useState();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const myDate = new Date().toLocaleDateString("pl", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            });
            setCurrentDate(myDate);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="header">
            <p className="header__date">Dzisiaj jest {currentDate}</p>
            <h1 className="header__paragraph">Kantor wymiany walut</h1>
        </div>
    )
};

export default Header;