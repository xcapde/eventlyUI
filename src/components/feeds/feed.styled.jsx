import styled from "styled-components";
import { Row, Col, Title } from "../../styles/styles.styled";

export const Wrapper = styled(Col)`
    width: 95%;
    height: 95%;
    justify-content: 'flex-start';
    margin: 2.5% auto;
    overflow: hidden;
    @media (min-width: 820px) {
        
    }
`;

export const FeedCnt = styled(Col)`
    height: ${props => props.height || '100%'};
    overflow: hidden;
    align-items: flex-start;
    gap: ${props => props.gap || '2.5%'};
`;

export const FeedTitle = styled(Title)`
    height: var(--feed-title-height);
`;

export const VerticalFeed = styled.div`
    height: ${props => props.height || '100%'};
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-content:${props => props.alignContent || "start"};
    grid-gap: 1rem 1rem;
    overflow: hidden;
    overflow-y: scroll;
    padding: ${props => props.padding || '1rem 0 2rem 0'};
    @media (min-width: 820px) {
        height: 100%;        
        grid-template-columns: auto auto auto auto auto;
        grid-gap: 2rem 1rem;
        justify-content: ${props => props.justify || 'flex-start'};
        padding: 1rem 0 0 0;
    }
`;

export const VerticalFeedMainCard = styled(VerticalFeed)`
    @media (min-width: 820px) {
            grid-template-columns: repeat(auto-fill, minmax(var(--cardMain-width), 1fr));
            grid-gap: 3rem 3rem;
    }
`;

export const VerticalFeedMobile = styled(VerticalFeed)`
     @media (min-width: 820px) {
        display:none;
    }
`;

export const VerticalFeedDesktop = styled(VerticalFeedMainCard)`
    display: none;
    @media (min-width: 820px) {
        display: grid;
    }
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
`;

export const ProfFeed = styled(Col)`
    justify-content: flex-start;
    overflow-y: scroll;
    overflow-x: hidden;
    gap: 2.5%;
    /* padding: 2%; */
`;