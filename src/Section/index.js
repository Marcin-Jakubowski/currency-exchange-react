import React from "react";
import "./style.css";

const Section = ({ body, finalResult }) => (
    <div className="section">
        {body}
        <p className="section__paragraph">
            Otrzymasz: <strong>{finalResult}</strong>
        </p>
    </div>
);

export default Section;