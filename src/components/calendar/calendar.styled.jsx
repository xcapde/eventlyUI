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
    height: 50%;
    justify-content: center;
    border-radius: 1.4rem;
    background-color: ${props => props.color};
    gap: 1rem;
    & > p{
        color: var(--color-white);
    }
    @media(min-width: 820px){
        cursor: pointer;
        width: fit-content;
        gap: 3rem;
        padding: 15px 10px;
    }
    
`;