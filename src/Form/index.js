import React, { useState } from "react";
import "./style.css"

const Form = ({calculateResult}) => {

    const [amount, setAmount] = useState("");
    const [actualCurrency, setActualCurrency] = useState("");
    const [expectedCurrency, setExpectedCurrency] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(+amount, actualCurrency, expectedCurrency);
        setAmount("");
    }

    return (<form className="form" onSubmit={onFormSubmit} >
        <fieldset className="form__fieldset">
            <legend className="form__legend">Wypełnij dane:</legend>


            <label className="form__label">
                <span className="form__text">Podaj kwotę: </span>
                <input
                    value={amount}
                    required
                    type="number"
                    step="0.01"
                    min="5"
                    max="10000000"
                    autoFocus
                    onChange={({ target }) => setAmount(target.value)}
                />
            </label>

            <label className="form__label">
                <span className="form__text">Podaj walutę początkową: </span>
                <select
                    onChange={({ target }) => setActualCurrency(target.value)}
                    value={actualCurrency}
                >
                    <option></option>
                    <option>PLN</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
            </label>

            <label className="form__label">
                <span className="form__text">Podaj walutę końcową: </span>
                <select
                    onChange={({ target }) => setExpectedCurrency(target.value)}
                    value={expectedCurrency}
                >
                    <option></option>
                    <option>PLN</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>
            </label>

            <button className="form__button">Przelicz</button>

        </fieldset>
    </form>
    )
};


export default Form;