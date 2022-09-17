import styled from "styled-components";
import { Col, Row, Title } from "../../styles/styles.styled";

export const Header = styled(Col)`
    height: 30vh;
    color:var(--color-white);
    font-family: var(--header-font);
    & > div > div {
        width: 90%;
        margin: 0 auto;
    }
    & > div:nth-child(1){
        background-color: var(--color-dark);
        justify-content: flex-start;
        & > h1{
            position: relative;
            width: 90%;
            top: 0.85rem;
            color: var(--color-white-contrast);
            margin: 0 auto;
        }
    }
    & > div:nth-child(2){
        height: 40vh;
        & > h1{
        justify-content: center;
        width: fit-content;
        }
    }
`;

export const NavCnt = styled(Col)`
    height: 15vh;
    background-color: var(--color-gray);
    color:var(--color-dark);
    font-family: var(--calendar-font);
`;


export const Main = styled(Col)`
    height: 60vh;
    background-color: var(--color-white);
    color:var(--color-dark);
    font-family: var(--header-font);
`;

export const ProfileFeedTitle = styled(Title)`
    font-size: medium;
    justify-content: center;
    padding: 1rem;
`;