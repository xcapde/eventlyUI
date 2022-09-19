import styled from "styled-components";
import { Col, Title } from "../../styles/styles.styled";

export const Header = styled(Col)`
    height: 35vh;
    color: var(--color-white);
    font-family: var(--header-font);
    background-color: var(--color-dark);
    @media(min-width: 820px){
        height: 30vh;
        }
    & > div > div {
        width: 90%;
        margin: 0 auto;
    }
    & > div:nth-child(1){
        background-color: var(--color-dark);
        justify-content: flex-start;
        height: 35%;
        & > h1{
            position: relative;
            width: 90%;
            top: 0.85rem;
            color: var(--color-white-contrast);
            margin: 0 auto;
        }
    }
    & > div:nth-child(2){
        height: 50%;
        width: 100%;
        /* background-color: var(--color-navrail-contrast); */
        @media(min-width: 820px){
            background-color: var(--color-dark);
        }
        & > h1{
        justify-content: center;
        width: fit-content;
        }
    }
`;

export const NavCnt = styled(Col)`
    height: 15%;
    background-color: var(--color-white);
    color:var(--color-dark);
    font-family: var(--calendar-font);
    & > div > button{
        width: calc(100% / 3);
    }
`;


export const Main = styled(Col)`
    height: 55vh;
    background-color: var(--color-white);
    color:var(--color-dark);
    font-family: var(--header-font);
    @media(min-width: 820px){
        height: 60vh;
        }
`;

export const ProfileFeedTitle = styled(Title)`
    font-size: medium;
    justify-content: center;
    padding: 1rem;
`;