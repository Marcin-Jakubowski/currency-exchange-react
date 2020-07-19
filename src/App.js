import React, { useState } from 'react';
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [finalResult, setFinalResult] = useState("");
  const PLN_rate = 1;
  const EUR_rate = 4.4771;
  const USD_rate = 3.9177;
  const calculateResult = (amount, actualCurrency, expectedCurrency) => {
    let PLNAmount = "";
    let expectedAmount = "";
    switch (actualCurrency) {
      case "PLN":
        PLNAmount = amount * PLN_rate;
        break;
      case "EUR":
        PLNAmount = amount * EUR_rate;
        break;
      case "USD":
        PLNAmount = amount * USD_rate;
        break;
    }

    switch (expectedCurrency) {
      case "PLN":
        expectedAmount = PLNAmount / PLN_rate;
        break;
      case "EUR":
        expectedAmount = PLNAmount / EUR_rate;
        break;
      case "USD":
        expectedAmount = PLNAmount / USD_rate;
        break;
    }
    setFinalResult(expectedAmount);
  };

  return (
    <Container>
      <Header />
      <Section
        finalResult={+finalResult}
        body={<Form calculateResult={calculateResult} />}
      />
    </Container>
  );
}

export default App;