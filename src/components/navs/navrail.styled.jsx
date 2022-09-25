import styled from "styled-components";
import { Breakpoint, Img } from "../../styles/styles.styled";

export const ToggleBtn = styled.button`
    height: 3rem;
    width: 3rem;
    background-color: transparent;
    border-radius: .75rem;
    border: none;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    grid-row: 2/3;
    &::before{
        content:'\f142  \f142';
        font-family: "Font Awesome 6 Free";
        font: var(--fa-font-solid); 
        font-weight: 900;
        font-size: 18px;
        color: var(--color-white);
    }
`;

export const Logo = styled(Img)`
    height: fit-content;
    width: 3rem;
    object-fit: contain;
    grid-row: 3/4;
`;

export const Wrapper = styled.section`
    display: none;
   @media (min-width:${Breakpoint.md}) {
        height: 100vh;
        width: ${props => props.width || '6rem'};
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        display: grid;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: repeat(7, 1fr);
        grid-auto-flow: row;
        place-content: center;
        row-gap: 1.35rem;
        z-index: var(--index-sidebar);
        border-radius: 0 .75rem .75rem 0;
        background-color: var(--color-navrail-contrast);
        cursor: pointer;
        outline: none;
        overflow: hidden;
        /* transition: width .5s linear; */
        & > *{
            z-index: 6;
        }
        & > button, & > img{
            grid-column: ${props => props.column || '3/6'};
        }
        & > div:nth-child(3){
            grid-row: 4/5;

        }
        & > div:nth-child(4){
            grid-row: 5/6;

        }
        & > div:nth-child(5){
            height: 15vh;
            grid-row: 6/7;

        }
        /* &::before{
            content: "";
            width: 6rem;
            height: 100vh;
            top: 0;
            left: 0;
            position: absolute;
            background-color:  var(--color-navrail);
            z-index: 5;
        } */
    }
`;

export const NavRow = styled.div`
        height: fit-content;
        display: grid;
        grid-column: 2/7;
        grid-template-columns: repeat(7,1fr);
        grid-template-rows: auto;
        grid-auto-flow: row;
        place-content: space-evenly;
        padding: 5% 6%;
        align-items: flex-end;
        justify-items: start;
        border-radius: .25rem;
        background-color: ${props => props.bg || 'transparent'};
        grid-row: ${props => props.row|| 'inherit'};
        &:hover{
            background-color: rgba(255, 255, 255, .25);
        }
`;

export const Section = styled.div`
    height: 30vh;
    position: relative;
    display: grid;
    grid-column: 1/8;
    grid-template-columns: ${props => props.columns || 'auto'};
    grid-template-rows: repeat(5, 1fr);
    grid-auto-flow: ${props => props.flow || 'row'};
    border-top: 1px solid rgba(255, 255, 255, .25);
    place-content: space-evenly;
    & > div:nth-child(1){
        grid-row: 2/3;
    }
    & > div:nth-child(2){
        grid-row: 3/4;
    }
    & > div:nth-child(3){
        grid-row: 4/5;
    }
    & > div:nth-child(4){
        grid-row: 5/6;
    }
    &::before{
        content: "";
        position: absolute;
        top: -3px;
        left: 0;
        height: 5px;
        width: 2rem;
        background-color: var(--color-navrail-contrast);
    }
    &::after{
        content: "";
        position: absolute;
        top: -3px;
        right: 0;
        height: 5px;
        width: 2rem;
        background-color: var(--color-navrail-contrast);
    }
`;


export const NavIcon = styled.span`
    grid-column: ${props => props.column || ' 3/8'};
    width: fit-content;
    font-size: 13px;
    color: white;
    &:hover{
        color: lightgray;
    }
`
export const NavCont = styled.span`
    display: ${props => props.display || 'none'};
    grid-column: ${props => props.col || '3/8'};
    grid-row: ${props => props.row};
    width: fit-content;
    font-family: var(--detail-font);
    font-size: var(--font-size-navRail);
    color: ${props => props.color || 'transparent'};
    white-space: nowrap;
    transition: display 6s ease, color 2s linear, grid-column none;
    padding-top: ${props => props.paddingTop || 'none'};
    &:hover{
        color: lightgray;
    }
`;

export const Aside = styled.aside`
    height: fit-content;
    width: fit-content;
    min-width: 12rem;
    position: fixed;
    top: calc(${props => props.top} - 1.1rem);
    bottom: ${props => props.bottom};
    left: 12.5rem;
    background-color: var(--color-navrail-contrast);
    border-radius: .75rem;
    z-index: var(--index-sidebar);
    padding: .5rem;
    gap: 5%;
    cursor: pointer;
    transition: all 2s;
    & > div{
        height: fit-content;
        min-height: 10vh;
        grid-template-rows: auto;
        & > div {
            grid-column: 1/8;
        }
        & > div > span:nth-child(2){
            grid-column: 2/7;
        }
    }
    & > ${Section}{
        border-top: none;
    }
`;
