import { useState, useEffect } from "react";
import axios from "axios";

const useRatesData = () => {
    const [ratesData, setRatesData] = useState();

    useEffect(() => {
        axios.get("https://api.exchangeratesapi.io/latest?base=PLN")
            .then(response => setRatesData({
                rates: response.data.rates,
                date: response.data.date,
            }))
            .catch(error => console.error(error));
    }, [])

    return ratesData;
};

export default useRatesData;