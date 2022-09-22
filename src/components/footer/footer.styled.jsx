import styled from "styled-components";
import { Breakpoint, Row } from "../../styles/styles.styled";
import { TabButton } from "../buttons/buttons.styled";

export const Wrapper = styled.footer`
    height: var(--footer-height);
    width: 100vw;
    left: -1px;
    bottom: -2px;
    position: fixed;
    display: flex;
    justify-content:center;
    background-color: var(--color-footer);
    z-index: var(--index-footer);
    box-shadow: 0px 0px 8px lightgrey;
    border-radius: var(--footer-radius);
    border: 1px solid lightgray;
    
    @media(min-width:${Breakpoint.md}){
        display: none;
    }
`

export const FooterItemsCnt = styled(Row)`
    width : 95%;
    margin: 0 auto;
`;

export const FooterItem = styled(TabButton)`
    width: 20%;
    color: ${props => props.color || 'var(--color-item-footer)'};  
    & i{
        font-size: var(--font-size-nav-icon);
    }
    &:hover{
        color: var(--tab-button-active);
    }
`