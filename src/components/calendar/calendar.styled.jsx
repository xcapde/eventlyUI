import styled from "styled-components";
import { Breakpoint, Col, DetailText, Row } from "../../styles/styles.styled";

export const Wrapper = styled(Col)`
`;

export const Month = styled(DetailText)`
    color: var(--color-white);
    font-size: var(--font-size-card-title);
    align-self: flex-start;
    height: 20px;
    line-height: 20px;
    @media(min-width:${Breakpoint.md}){
        text-transform: uppercase;
        color: var(--color-main);
    }
`;

export const CalendarCnt = styled(Row)`
   gap: 1rem;
   @media(min-width:${Breakpoint.md}){
        width: 80% !important;
        justify-content: space-evenly;
        margin-right: 10rem !important;
    }
`;

export const Day = styled(Col)`
    height: fit-content;
    width: fit-content;
    width: 45px;
    justify-content: center;
    border-radius: 1.4rem;
    padding: 15px 0;
    background-color: ${props => props.bg};
    gap: 2rem;
    & > p{
        color: var(--color-white);
    }
    @media(min-width:${Breakpoint.md}){
        gap: 2rem;
        cursor: pointer;
        width: calc(100%/7);
        border-right: 1px solid var(--color-main);
        border-radius: inherit;
        align-items: flex-end;
        padding-right: 1rem;
        background-color: transparent;
        justify-content: center;
        & > p{
            font-size: .95rem;
            color: ${props => props.color || 'var(--color-main)'};
            font-family: var(--numbers-font);
            font-weight: 400;
        }
        & > p:nth-child(2){
            font-size: 24px;
        }
    }
    
`;