import React from "react";
import { Container, Content } from "./styled";

const Section = ({ body, finalResult }) => (
    <Container>
        {body}
        <Content>
            Otrzymasz: <strong>{finalResult}</strong>
        </Content>
    </Container>
);

export default Section;