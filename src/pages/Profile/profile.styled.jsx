import styled from "styled-components";
import { Col, Title } from "../../styles/styles.styled";

export const Header = styled(Col)`
    height: 30vh;
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
        height: 40%;
        & > h1{
            position: relative;
            width: 90%;
            top: 0.85rem;
            color: var(--color-white-contrast);
            margin: 0 auto;
        }
    }
    & > div:nth-child(2){
        height: 60%;
        width: 100%;
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

export const NavCntDt = styled(NavCnt)`
    height: 7.5%;
    width: 50%;
    margin: 0 auto;
`;

export const ProfileFeedTitle = styled(Title)`
    font-size: medium;
    justify-content: center;
    padding: 1rem 0;
`;

export const MainMobile = styled(Col)`
    height: 60vh;
    justify-content: flex-start;
    background-color: var(--color-white);
    color:var(--color-dark);
    font-family: var(--header-font);
    @media(min-width: 820px){
        display: none;
    }
`;

export const MainDesktop = styled.section`  
    display: none;
    @media(min-width: 820px){
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(19, 1fr);
        grid-template-rows: repeat(11,1fr);
        /* position: relative; */
        & > div{
            height: 100%;
            width: 100%;
            border-radius: .75rem;
            box-shadow: 0px 0px 8px lightgray;
            background-color: white;
            /* padding: 6px; */
        }
        & > div:nth-child(1){
            grid-column: 2/9;
            grid-row: 2/11;
        }
        & > div:nth-child(2){
            grid-column: 10/14;
            grid-row: 2/11;
            gap: 0;
        }

        & > div:nth-child(3){
            grid-column: 16/19;
            grid-row: 2/3;
        }

        & > div:nth-child(4){
            grid-column: 15/19;
            grid-row: 4/11;
            gap: 0;
        }
        &::before{
            content:"";
            top:0;
            left:0;
            right: 0;
            bottom:0;
            height: 100vh;
            width: 100vw;
            display: block;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            z-index: -1;
            background-image: url("https://unsplash.com/es/fotos/8ioenvmof-I");
            background-size: 100%;
            filter: blur(2px);
        }
    }
    
`;
