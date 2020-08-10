import { useState, useEffect } from "react";

const useCurrentDate = () => {
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

    return currentDate
};

export default useCurrentDate;