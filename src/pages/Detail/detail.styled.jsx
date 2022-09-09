import styled from "styled-components";
import { Img, Page, Row } from "../../styles/styles.styled";

export const DetailPage = styled(Page)`
    flex-direction: column;
    position: relative;
`

export const DetailImg = styled(Img)`
    z-index: var(--index-detail-img);
    height: var(--detail-image-height);
    border-radius: 0;
`

export const DetailHeader = styled.div`
    height: ${props => props.height || '20%'};
    display: flex;
    flex-direction: column ;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 5% auto 0 auto;
`

export const NavTabs = styled(Row)`
    position: relative;
    justify-content: center;
    height:20%;
    margin: 5% 0;
    flex-wrap: wrap;
    gap: 15px 0;
`

export const DetailFooter = styled.div`
    height: 20%;
    width: 95%;
    padding: 0 0 7.5% 0;
    margin : 0 auto;
`