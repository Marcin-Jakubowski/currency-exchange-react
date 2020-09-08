import React, { useState } from "react";
import { FormItem, Fieldset, Legend, Label, Content, Button, DataInfo, ImportInfo } from "./styled"

const Form = ({ calculateResult, ratesData }) => {
    const [amount, setAmount] = useState("");
    const [currentCurrency, setCurrentCurrency] = useState("");
    const [expectedCurrency, setExpectedCurrency] = useState("");

    const generateOptions = ratesData === undefined || Object.keys(ratesData.rates).map((rate) => {
        return <option key={rate} value={ratesData.rates[rate]} > {rate}</option >
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(+amount, +currentCurrency, +expectedCurrency);
    }

    return ratesData === undefined
        ? <ImportInfo>Trwa pobieranie aktualnych kursów walut.</ImportInfo>
        : (
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
                    <DataInfo>Kursy walut pobierane są z Europejskiego Banku Centralnego.</DataInfo>
                    <DataInfo>Aktualne na dzień: {ratesData === undefined || ratesData.date}</DataInfo>
                </Fieldset>
            </FormItem>)
};

export default Form;