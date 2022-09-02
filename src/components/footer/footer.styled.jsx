import styled from "styled-components";
import { Col } from "../../styles/styles.styled";

export const Wrapper = styled.div`
    z-index: var(--indexFooter);
    position: fixed;
    bottom: 0;
    background-color: var(--whiteColor);
    display: flex;
    height: 10%;
    width: 100%;

    @media(min-width: 820px){
        display: none;
    }
`

export const Tab = styled(Col)`
    width: 20%;
    height: 100%;

    &:hover{
        background-color: #535353;
    }
`