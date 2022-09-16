import styled from "styled-components";
import { FeedTitle } from "../components/feeds/feed.styled";
import { Col, View } from "../styles/styles.styled";

export const DetailView = styled(View)`
    height: calc(100% - var(--footer-height));
    width: 100%;
    top: 0;
    flex-direction: row;
    align-items: flex-start;
    @media(min-width: 820px){
        height: 100%;
        width: 100%;
    }
`;

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