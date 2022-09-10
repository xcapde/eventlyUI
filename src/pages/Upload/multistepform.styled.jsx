import styled from "styled-components";
import { Col, Page, Row } from "../../styles/styles.styled";

export const Header = styled(Col)`
    height: 30vh;
    justify-content: space-around;
    border: 1px solid black;
`;

export const ProgressBar = styled.div`
    height: 5px;
    width: 85%;
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--color-input-outline);
    border-radius: .25rem;
`;

export const Progress = styled(ProgressBar)`
    height: 3px;
    width: ${props => props.width};
    max-width: 99.5%;
    position: absolute;
    left: .25%;
    align-self: center;
    background-color: var(--color-main);
    transition: width 1s ease;
`;

export const Main = styled(Page)`
    height: 100%;
    width: 100%;
`;

export const Footer = styled(Row)`
    height: 15vh;
    justify-content: space-evenly;
    border: 1px solid black;
`;