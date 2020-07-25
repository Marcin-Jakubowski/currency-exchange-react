import React from "react";
import "./style.css";

const Header = ({ body }) => (
    <div className="header">
        {body}
        <h1 className="header__paragraph">Kantor wymiany walut</h1>
    </div>
);

export default Header;