import styled from "styled-components";
import { Col, Page, Row, Wrapper } from "../../styles/styles.styled";


export const DesktopWrapper = styled(Wrapper)`
    @media (min-width: 820px) {
        height: 85%;
        margin: auto;
        /* position: absolute;
        left: 25%; */
    }
`;

export const Header = styled(Col)`
    height: 30vh;
    justify-content: space-around;
    align-items: center;
    & > *{
        text-align:center;
        justify-content: center;
    }
    @media (min-width: 820px) {
        width: 25%;
    }
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
    width: 95%;
    @media (min-width: 820px) {
        width: fit-content;
    }
`;


export const Footer = styled(Row)`
    height: 15vh;
    justify-content: space-evenly;
    @media (min-width: 820px) {
        width: 60%;
    }
`;