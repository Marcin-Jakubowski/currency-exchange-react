import React, { useState } from 'react';
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Container from "./Container";
import useRatesData from "./useRatesData";

function App() {
  const [finalResult, setFinalResult] = useState("");
  const ratesData = useRatesData();

  const calculateResult = (amount, currentCurrency, expectedCurrency) => {
    const expectedCurrencyName = Object.keys(ratesData.rates).find(rate =>
      ratesData.rates[rate] === expectedCurrency);
    setFinalResult(
      `${(amount / currentCurrency * expectedCurrency).toFixed(2)} ${expectedCurrencyName}`
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
            ratesData={ratesData}
          />
        }
      />
    </Container>
  );
}

export default App;