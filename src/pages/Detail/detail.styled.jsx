import styled from "styled-components";
import { Img, Page, Row } from "../../styles/styles.styled";

export const DetailPage = styled(Page)`
    flex-direction: column;
    position:relative;
`

export const DetailImg = styled(Img)`
    z-index: var(--index-detail-img);
    border-radius: var(--card-radius);
    border-radius: 0;
    height: 50%;
`

export const DetailHeader = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: flex-start;
    align-items: flex-start;
    height:25%;
    width: 95%;
    padding: 2.5%;

    & p{
        font-size: small;
        margin-top: 0.5rem;
    }
    & i{
        font-size: smaller;
        margin-right: 0.5rem;
    }
    & h1{
        font-size: large;
    }
    & img{
        height: 1.5rem;
        width: 1.5rem;
    }
`

export const NavTabs = styled(Row)`
    position: relative;
    height:10%;
    padding: 2.5% 0;
    justify-content: flex-start;
    overflow-x:auto;

    & button{
        font-size:smaller;
        text-transform: capitalize;
        width: 25%;
        margin: 0;
    }
`

export const DetailFooter = styled.div`
    width: 92%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    & button{
        height: var(--detail-button-heigth);
        width: var(--detail-button-widht);
        font-size:var(--font-size-detall-button);
        @media (min-width: 820px) {
            bottom: 1.5rem;
            right: 2rem;
        }
    }
`