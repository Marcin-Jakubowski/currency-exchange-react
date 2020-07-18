import React from 'react';

function App() {
  return (
    <main className="container">
    <h1 className="header">Kantor wymiany walut</h1>
    <div className="section">
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Wypełnij dane:</legend>


                    <label className="form__label">
                        <span className="form__text">Podaj kwotę: </span><input name="amount" value="" required type="number" step="0.01" min="5" max="10000000" autofocus />
                    </label>

                    <label className="form__label">
                        <span className="form__text">Podaj walutę początkową: </span><select name="actualCurrency">
                            <option value="PLN">PLN</option>
                            <option value="EUR">Euro</option>
                            <option value="USD">Dolar amerykański</option>
                        </select>
                    </label>

                    <label className="form__label">
                        <span className="form__text">Podaj walutę końcową: </span><select name="expectedCurrency">
                            <option value="PLN">PLN</option>
                            <option value="EUR">Euro</option>
                            <option value="USD">Dolar amerykański</option>
                        </select>
                    </label>

                <button className="form__button">Przelicz</button>

            </fieldset>
        </form>
        <p className="section__paragraph">Otrzymasz: <strong>N/a</strong></p>
        
    </div>
</main>
  );
}

export default App;
