import styled from "styled-components";
import { Row } from "../../styles/styles.styled";

export const NavTabs = styled(Row)`
    position: relative;
    justify-content: center;
    height: auto;
    flex-wrap: wrap;
    gap: 10px 0;

    @media(min-width: 820px){
        flex-wrap:nowrap;

    }
`