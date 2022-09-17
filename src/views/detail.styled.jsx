import styled from "styled-components";
import { FeedTitle } from "../components/feeds/feed.styled";
import { Col, View } from "../styles/styles.styled";

export const Main = styled(Col)`
    @media(min-width: 820px){
        width: calc( 100% / 3);
    }
`

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

export const SideControl = styled(Col)`
    display:none;
    @media(min-width: 820px){
        width: 32%;
        display: flex;
        justify-content: flex-start;
        opacity: 0.8;
    }
`