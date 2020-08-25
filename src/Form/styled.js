import styled from "styled-components";

export const FormItem = styled.form`
    max-width: 600px;
`;

export const Fieldset = styled.fieldset`
    text-align: center;
    background-color: #002855;
    border-radius: 20px;
    border: 2px solid #979DAC;
    box-shadow: 0 0 10px #33415C;
`;

export const Legend = styled.legend`
    background-color: #0353A4;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #979DAC;
`;

export const Label = styled.label`
    display: grid;
    grid-template-columns: repeat(2, 200px);
    justify-content: space-around;
    padding: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 400px;
    }
`;

export const Content = styled.span`
    display: inline-block;
    width: 250px;
    text-align: left;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: 2px solid #222;
    border-radius: 20px;
    background-image: radial-gradient(hsl(210, 96%, 40%), #001233);
    color: #fff;

    &:hover {
        background-image: radial-gradient(hsl(210, 96%, 60%), #001233);
    }

    &:active {
        background-image: radial-gradient(hsl(210, 96%, 75%), #001233);
    }
`;