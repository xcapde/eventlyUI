import styled from "styled-components";
import { Col, Row } from "../../styles/styles.styled";

export const HeaderCnt = styled(Row)`
    height: 18vh;
    background-color: var(--color-dark);
    color:var(--color-white);
    font-family: var(--header-font);
`

export const CalendarCnt = styled(Col)`
    height: 18vh;
    background-color: var(--color-gray);
    color:var(--color-dark);
    font-family: var(--calendar-font);
`

export const InformationCnt = styled(Col)`
    height: 64vh;
    background-color: var(--color-white);
    color:var(--color-dark);
    font-family: var(--header-font);
`