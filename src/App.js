import React, { useState } from 'react';
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Container from "./Container";
import axios from "axios";

function App() {
  const [finalResult, setFinalResult] = useState("");

  const currencies = {
    "PLN": 1,
    "EUR": 4.4771,
    "USD": 3.9177,
  };

  // axios.get("https://api.exchangeratesapi.io/latest?base=PLN")
  //   .then(response => response.data=currencies)
  //   .catch(error => console.error(error));

  const calculateResult = (amount, currentCurrency, expectedCurrency) => {
    const expectedCurrencyName = Object.keys(currencies).find(currency =>
      currencies[currency] === expectedCurrency);
    setFinalResult(
      `${(amount * currentCurrency / expectedCurrency).toFixed(2)} ${expectedCurrencyName}`
    );
  };

  return (
    <Container>
      <Header />
      <Section
        finalResult={finalResult}
        body={
          <Form
            calculateResult={calculateResult}
            currencies={currencies}
          />
        }
      />
    </Container>
  );
}

export default App;