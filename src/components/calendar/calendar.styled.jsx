import styled from "styled-components";
import { Col, Row } from "../../styles/styles.styled";


export const CalendarCnt = styled(Row)`
   gap: 1rem;
   @media(min-width: 820px){
        width: 60% !important;
        justify-content: space-evenly;
    }
`;

export const Day = styled(Col)`
    height: fit-content;
    width: fit-content;
    width: 45px;
    justify-content: center;
    border-radius: 1.4rem;
    padding: 15px 0;
    background-color: ${props => props.color};
    gap: 2rem;
    & > p{
        color: var(--color-white);
    }
    @media(min-width: 820px){
        gap: 3rem;
        cursor: pointer;
    }
    
`;