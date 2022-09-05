import styled from "styled-components";
import { Col } from "../../styles/styles.styled";

export const Wrapper = styled.div`
    z-index: var(--index-footer);
    position: fixed;
    bottom: 0;
    background-color: var(--color-white);
    display: flex;
    height: var(--footer-height);
    width: 100%;

    @media(min-width: 820px){
        display: none;
    }
`

export const Tab = styled(Col)`
    width: 20%;
    height: 100%;

    &:hover{
        background-color: var(--button-color-hover);
    }
`