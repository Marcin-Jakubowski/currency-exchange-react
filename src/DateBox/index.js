import React, { useState, useEffect } from "react";
import "./style.css";

const DateBox = () => {
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

    return (<p className="dateBox">Dzisiaj jest {currentDate}</p>);
};

export default DateBox;
