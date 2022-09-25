import styled from "styled-components";
import { Row, Col, Breakpoint } from "../../styles/styles.styled";

export const NavTabs = styled(Row)`
    position: relative;
    justify-content: center;
    height: auto;
    flex-wrap: wrap;
    gap: 0;

    @media(min-width:${Breakpoint.md}){
        height: 7.5vh;
        flex-wrap:nowrap;
    }
`

export const ModuleContentCnt = styled(Col)`
    height: fit-content;
`;

export const ContentGrid = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    grid-auto-flow: column;
    justify-content: ${props => props.justify || 'center'};
    place-content: center;
    height: 10vh;
    margin: 2.5%;
    width: 95%;
    @media(min-width:${Breakpoint.md}){
        height: 38vh;
        grid-template-rows: auto auto auto auto auto;
        align-content: flex-start;
    } 
`;