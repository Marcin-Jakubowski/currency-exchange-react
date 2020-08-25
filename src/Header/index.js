import React from "react";
import useCurrentDate from "./useCurrentDate";
import { HeaderBox, DateBox, Content } from "./styled";

const dateFormat = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

const Header = () => {
    const date = useCurrentDate();

    return (
        <HeaderBox>
            <DateBox>Dzisiaj jest {date.toLocaleDateString(undefined, dateFormat)}</DateBox>
            <Content>Kantor wymiany walut</Content>
        </HeaderBox>
    )
};

export default Header;