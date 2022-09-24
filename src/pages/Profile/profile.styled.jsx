import styled from "styled-components";
import { OptionsCnt } from "../../components/buttons/burgers/options.styled";
import { CloseBtn, EllipsisBtn, OptionBtn } from "../../components/buttons/buttons.styled";
import { Col, DetailText, Title } from "../../styles/styles.styled";

export const Header = styled(Col)`
    height: 30vh;
    color: var(--color-white);
    font-family: var(--header-font);
    background-color: var(--color-dark);
    @media(min-width: 820px){
        height: 30vh;
        & > ${OptionsCnt}, ${CloseBtn}, ${EllipsisBtn}{
            display: none;
            & > ${OptionsCnt} > ${OptionBtn}{
                display: none;
            }
        }
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
        grid-template-columns: repeat(47, 1fr);
        grid-template-rows: repeat(15,1fr);
        align-content: flex-start;
        & > div{
            height: 100%;
            width: 100%;
            border-radius: .75rem;
            box-shadow: 0px 0px 8px lightgray;
            background-color: rgba(255, 255, 255, .8);
        }
        & > div:nth-child(1){
            grid-column: 4/33;
            grid-row: 2/16;
            gap: 0;
            max-height: 66vh;
            & div > div{
                background-color: transparent;
            }
        }
        & > div:nth-child(2){
            grid-column: 34/46;
            grid-row: 2/5;
            gap: 0;
            max-height: 9rem;
            margin-bottom: calc(15vh - 9rem);
            position:relative;
        }
        & > div:nth-child(3){
            grid-column: 34/46;
            grid-row: 6/16;
            gap: 0;
            max-height: 46vh;
        }
        & > ${DetailText}{
            height: fit-content;
            margin: auto 0;
            margin-bottom: 0.5rem;
            font-size: 1.05rem;
            font-weight: 900;
            color: var(--color-dark);
        }
        & > ${DetailText}:nth-child(4){
            grid-column: 5/34;
            grid-row: 1/1;
        }
        & > ${DetailText}:nth-child(5){
            grid-column: 35/46;
            grid-row: 1/1;
        }
        & > ${DetailText}:nth-child(6){
            grid-column: 35/46;
            grid-row: 5/5;
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
            background-image: url(https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80);
            background-size: 100%;
            /* filter: blur(2px); */
        }
    }
    
`;