import styled from "styled-components";
import { MainButton } from "../../components/buttons/buttons.styled";
import { Img, Page, Row, Wrapper } from "../../styles/styles.styled";

export const DetailPage = styled(Page)`
    flex-direction: column;
    position:relative;
`

export const ImgControl = styled.div`
    max-height: 50%;
    width: 100%;
    background-color: var(--color-grey-background);
    position: relative;
`

export const BackgroundImg = styled(Img)`
    width:100%;
    height: 100%;
    position: absolute;
    top: 0;
    object-fit:cover;
`

export const DetailImg = styled(Img)`
    z-index: var(--index-detail-img);
    object-fit: contain;
    border-radius: var(--card-radius);
    position: relative;
`

export const NavigationTabs = styled(Row)`
    position: relative;
    height: 5%;
    margin-top: 1.5rem;
    justify-content: flex-start;
`

export const DetailFooter = styled.div`
    position: absolute;
    bottom:0;
    width: 100%;
    height: 5%;
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