import styled from "styled-components";
import { Row } from "../../styles/styles.styled";

export const VerticalFeed = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 1.5rem 1rem;
    overflow-y: scroll;
    @media (min-width: 820px) {
        width: 96%;
        grid-template-columns: repeat(auto-fill, minmax(calc(var(--card-width-desktop) + 0.5rem), 1fr));
        margin: 1% 2%;
    };
`;

export const HorizontalFeed = styled(Row)`
    overflow-x: scroll; 
    justify-content: flex-start;
`