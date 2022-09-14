import styled from "styled-components";
import { Row } from "../../styles/styles.styled";

export const VerticalFeed = styled.div`
    height: ${props => props.height || '100%'};
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 1rem 1rem;
    overflow-y: scroll;
    padding: 1rem 0 2rem 0;
    @media (min-width: 820px) {
        height: 100%;
        grid-template-columns: repeat(auto-fill, minmax(calc(var(--cardXS-width-desktop) + 1%), 1fr));
        grid-template-rows: repeat(auto-fill, minmax(calc(var(--cardXS-height) + 10%), 1fr));
        padding: 1rem 0 0 0;
    };
`;

export const UlFeed = styled.ul`
        height: 95%;
    width: 95%;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(5, 1fr);
    grid-auto-flow: column;
    grid-column-gap: 2.5%;
    place-content: space-evenly;
    /* box-shadow: 1px 1px 8px lightgrey; */
    /* border: 1px solid lightgray; */
    border-radius: 0.75rem;
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
    overflow-x: auto; 
    justify-content: flex-start;
    display: -webkit-box;
    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 820px) {
        ::-webkit-scrollbar {
        display: flex;
        }
    }
`
