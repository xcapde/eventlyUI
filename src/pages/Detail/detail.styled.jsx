import styled from "styled-components";
import { MainButton } from "../../components/buttons/buttons.styled";
import { Img, Page, Row } from "../../styles/styles.styled";

export const DetailPage = styled(Page)`
    flex-direction: column;
    position:relative;
`

export const ImgControl = styled.div`
    height: 50%;
    width: 100%;
    background-color: var(--color-grey-background);
    position: relative;
`

export const DetailImg = styled(Img)`
    z-index: var(--index-detail-img);
    object-fit: cover;
    border-radius: var(--card-radius);
    position: relative;
    border-radius: 0;
`
export const DetailBox = styled.div`
    height: 50%;
    width: 100%;
`

export const DetailHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column ;
    height:10%;
    padding: 5%;
    align-items: flex-start;

    & p{
        margin-top: 0.5rem;
    }
    & i{
        font-size: small;
    }
    & h1{
        font-size: large;
    }
`

export const NavigationTabs = styled(Row)`
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

export const TabsContain = styled.div`
    height: 50%;
`

export const DetailFooter = styled.div`
    position: absolute;
    bottom:0;
    width: 100%;
    height: 15%;

    & p{
        position: absolute;
        bottom: 2rem;
        left: 1rem;
    }
`
export const DetailButton = styled(MainButton)`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    height: var(--detail-button-heigth);
    width: var(--detail-button-widht);
    font-size:var(--font-size-detall-button);
    @media (min-width: 820px) {
        bottom: 1.5rem;
        right: 2rem;
    }
`