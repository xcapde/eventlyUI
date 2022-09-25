import styled from "styled-components";
import { Breakpoint, Col, Row } from "../../styles/styles.styled";

export const MobileCnt = styled.section`
    @media (min-width:${Breakpoint.md}) {
            display:none;
        }
`;

export const DesktopCnt = styled.section`
    display: none;
    @media (min-width:${Breakpoint.md}) {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & #buttons{
            height: 10%;
            width: fit-content;
            top: 0;
            right: 5%;
            position: fixed;
            gap: 2rem;
        }
        & h1, h3{
            color: black;
            font-weight: 900;
            text-shadow: 1px 1px 2px rgba(255, 255, 255, .8);
        }
        & h1{
            font-size: 32px;
        }
        & h3{
            font-size: 28px;
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
            background-image: url(https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
            background-size: 100%;
            filter: blur(2px);
        }
    }
`;

