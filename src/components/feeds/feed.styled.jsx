import styled from "styled-components";
import { Row } from "../../styles/styles.styled";

export const VerticalFeed = styled.div`
    width: 100%;
    height: ${props => props.height || '100%'};
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 1rem 1rem;
    overflow-y: scroll;
    padding: 3% 0;
    @media (min-width: 820px) {
        width: 96%;
        grid-template-columns: repeat(auto-fill, minmax(calc(var(--card-width-desktop) + 0.5rem), 1fr));
        margin: 1% 2%;
    };
`;

export const UlFeed = styled.ul`
    height: 95%;
    width: 95%;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    grid-column-gap: 2.5%;
    place-content: space-evenly;
    box-shadow: 1px 1px 8px lightgray;
    border: 1px solid lightgray;
    border-radius: .75rem;
    padding: 5% 0%;
    list-style: none;
    & > li {
        display: flex;
        flex-direction: row;
        gap: 5%;
    }
`;
export const HorizontalFeed = styled(Row)`
    height: ${props => props.height || '100%'};
    overflow-x: scroll; 
    justify-content: flex-start;
    display: -webkit-box;
    margin: 0 5%;
    ::-webkit-scrollbar {
    display: none;
    }
`
