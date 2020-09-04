import React, { useState } from "react";
import { FormItem, Fieldset, Legend, Label, Content, Button } from "./styled"

const Form = ({ calculateResult, currencies }) => {
    const [amount, setAmount] = useState("");
    const [currentCurrency, setCurrentCurrency] = useState("");
    const [expectedCurrency, setExpectedCurrency] = useState("");

    const generateOptions = Object.keys(currencies).map((currency) => {
        return <option key={currency} value={currencies[currency]}>{currency}</option>
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(+amount, +currentCurrency, +expectedCurrency);
        setAmount("");
    }

    return (
        <FormItem onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Wypełnij dane:</Legend>
                <Label>
                    <Content>Podaj kwotę: </Content>
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
                </Label>
                <Label>
                    <Content>Podaj walutę początkową: </Content>
                    <select
                        onChange={({ target }) => setCurrentCurrency(target.value)}
                        value={currentCurrency}
                    >
                        <option></option>
                        {generateOptions}
                    </select>
                </Label>
                <Label>
                    <Content>Podaj walutę końcową: </Content>
                    <select
                        onChange={({ target }) => setExpectedCurrency(target.value)}
                        value={expectedCurrency}
                    >
                        <option></option>
                        {generateOptions}
                    </select>
                </Label>
                <Button>Przelicz</Button>
            </Fieldset>
        </FormItem>
    );
};


export default Form;