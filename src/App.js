import React, { useState } from 'react';
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [finalResult, setFinalResult] = useState("");

  const currencies = [
    { name: "PLN", value: 1 },
    { name: "EUR", value: 4.4771 },
    { name: "USD", value: 3.9177 },
  ];

  const calculateResult = (amount, currentCurrency, expectedCurrency) => {
    const expectedCurrencyName = currencies.find(currency =>
      currency.value === expectedCurrency).name;
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