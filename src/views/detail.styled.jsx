import styled from "styled-components";
import { FeedTitle } from "../components/feeds/feed.styled";
import { Col, View } from "../styles/styles.styled";

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
    @media(min-width: 820px){
        height: calc(100% - var(--detail-image-height));
        height: 100%;
        justify-content: flex-start;
        gap: 2%;
    }
`;

export const DetailTitle = styled(FeedTitle)`
    padding: .75rem;
`;

export const MainDesktop = styled.section`
    border: 4px solid red;
    height: 99%;
    width: calc(100% - 3rem);
    margin-left: 3rem;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(9, 1fr);
    & > div{
        height: 100%;
        width: 100%;
    } 
    & > div:nth-child(1){
        grid-column: 1/4;
        grid-row: 1/7;
        & >div{
            height: 100%;
        }
    }
    & > div:nth-child(2){
        border: 2px solid green;
        grid-column: 4/8;
        grid-row: 1/6;
    }
    & > div:nth-child(3){
        border: 2px solid blue;
        grid-column: 1/4;
        grid-row: 7/10;
    }
    & > div:nth-child(4){
        border: 2px solid yellow;
        grid-column: 4/8;
        grid-row: 6/10;
    }
`;
