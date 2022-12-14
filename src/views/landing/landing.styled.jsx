import styled from "styled-components";
import { JoinBtn } from "../../components/buttons/buttons.styled";
import { Breakpoint, Col, Page } from "../../styles/styles.styled";

export const LandingBg = styled(Page)`
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
            position: fixed;
            z-index: -1;
            background-image: url(https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
            background-size: 150%;
            filter: blur(3px);
            @media (min-width:${Breakpoint.md}) {
                background-size: 100%;
            }
        }
`;

export const MobileCnt = styled.section`
        height: 100%;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1, h3{
            color: black;
            font-weight: 900;
            text-shadow: 1px 1px 2px rgba(255, 255, 255, .8);
            text-align: center;
        }
        & span{
            color: var(--color-main)
        }
        & h1{
            font-size: 26px;
        }
        & h3{
            font-size: 20px;
            width: 65%;
            margin: 0 auto;
            line-height: 1.5;
        }
        & > ${Col}:nth-child(2){
            background-color: rgba(255, 255, 255, .25);
            border-radius: 2rem;
        }
        & ${JoinBtn}{
            width: 85%;
        }
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
            text-align: center;
        }
        & h1{
            font-size: 32px;
        }
        & h3{
            font-size: 28px;
            width: 70%;
            margin: 0 auto;
            line-height: 1.5;
        }
    }
`;

export const Dot = styled.span`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: ${props => props.bg || 'var(--color-main)'};
    margin: 1rem;
`;
