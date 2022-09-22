import styled from "styled-components";
import { TitleCard } from "../components/cards/cards.styled";
import { FeedTitle } from "../components/feeds/feed.styled";
import { Breakpoint, Col, DetailIcon } from "../styles/styles.styled";

export const ImgCnt = styled.div`
    height: var(--detail-image-height);
    width: 100%;
`

export const InfoCnt = styled(Col)`
    width: 90%;
    margin-bottom: 2%;
    & > div:nth-child(2){
        height: 35%;
    }
    & > div:nth-child(3){
        height: calc(100% - (35% + 5vh + (.75rem * 2)));
    }
    @media(min-width:${Breakpoint.md}){
        height: calc(100% - var(--detail-image-height));
        height: 100%;
        justify-content: flex-start;
        gap: 2%;
    }
`;

export const DetailTitle = styled(FeedTitle)`
    padding: .75rem;
`;


export const ModuleCnt = styled(Col)`
    justify-content: flex-start;
    position: relative;
    border-radius: var(--module-radius);
    box-shadow: 0px 0px 5px var(--card-shadow-opacity);
`
export const ModuleIcon = styled(DetailIcon)`
    width: 2rem;
    text-align: right;
`

export const ModuleTitle = styled(TitleCard)`
    height: 3rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: inherit;
    color: ${props => props.color || 'var(--color-detail-text)'};
    border-bottom: 1px solid lightgray;
    font-size:var(--font-size-detail-tab-button);
    font-weight: bold;
    padding: 0%;;
    gap: 1rem;
`

export const MainDesktop = styled.section`
    /* border: 4px solid red; */
    height: 99%;
    width: calc(100% - 3rem);
    margin-left: 3rem;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(9, 1fr);
    & > div{
        height: 90%;
        width: 100%;
        place-self: center;
    } 
    & > div:nth-child(1){
        grid-column: 1/4;
        grid-row: 1/7;
        height: 100%;
        /* & >div{
            height: 100%;
        } */
    }
    & > div:nth-child(2){
        /* border: 2px solid green; */
        grid-column: 4/8;
        grid-row: 1/6;

        width: 95%;
    }
    & > div:nth-child(3){
        /* border: 2px solid blue; */
        grid-column: 1/4;
        grid-row: 7/10;
    }
    & > div:nth-child(4){
        /* border: 2px solid yellow; */
        grid-column: 4/8;
        grid-row: 6/10;

        width: 95%;
        column-gap: 2rem;
    }
`;
