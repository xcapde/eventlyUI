import styled from "styled-components";
import { TitleCard } from "../../components/cards/cards.styled";
import { FeedTitle } from "../../components/feeds/feed.styled";
import { Breakpoint, Col } from "../../styles/styles.styled";

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
    box-shadow: 0px 0px 8px var(--card-shadow-opacity);
    overflow-y: ${props => props.overflowY || 'auto'};
`

export const ModuleTitle = styled(TitleCard)`
    height: 3rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: inherit;
    color: ${props => props.color || 'var(--color-detail-text)'};
    font-size:var(--font-size-detail-tab-button);
    font-weight: bold;
    padding: 0%;;
    gap: 1rem;
`

export const MainDesktop = styled.section`
    height: 99%;
    width: calc(100% - 3rem);
    margin-left: 3rem;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(9, 1fr);
    & > div{
        height: 90%;
        border-radius: .75rem;
        box-shadow: 0px 0px 8px lightgray;
        background-color: rgba(255, 255, 255, .8);
    } 
    & > div:nth-child(1){
        grid-column: 1/4;
        grid-row: 1/7;
        height: 100%;
    }
    & > div:nth-child(2){
        grid-column: 4/6;
        grid-row: 1/5;
    }
    & > div:nth-child(3){
        grid-column: 6/8;
        grid-row: 1/5;
    }
    & > div:nth-child(4){
        grid-column: 4/8;
        grid-row: 5/10;
        width: 85%;
        justify-self: flex-start;
        margin-left: 1.75rem;
        & ${Col} > div:nth-child(2){
            width: fit-content;
            min-width: 60%;
            max-width: 80%;
            margin: auto;
            align-content: center;
            justify-content: space-around;
        }
    }
    &::before{
            content:"";
            top:0;
            left:0;
            right: 0;
            bottom:0;
            height: 100vh;
            width: 100vw;
            display: block;
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            z-index: -1;
            background-image: url(https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80);
            background-size: 100%;
            filter: blur(1px);
        }
`;
