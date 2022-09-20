import styled from "styled-components";
import { Col, Img, Row, Title} from "../../styles/styles.styled";

/*SIZING*/
export const CardMain = styled(Col)`
    height: var(--cardMain-height);
    width: ${props => props.width || 'var(--cardMain-width)'};
    position: relative;
    margin: 0 1rem;
    background-color: var(--color-white);
    color: var(--color-detail-text);
    border-radius: var(--cardMain-radius);
    box-shadow: 0px 0px 8px var(--card-shadow-opacity);;
    @media (min-width: 820px) {
        height: var(--cardMain-height-desktop);
        /* width: ${props => `calc( ${props.width} *.85)` || 'var(--cardMain-width-desktop)'}; */
        width: var(--cardMain-width-desktop);
    }
`;

export const CardXS = styled(CardMain)`
    width: var(--cardXS-width);
    max-width: 400px;
    height: var(--cardXS-height);
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 820px) {
        width: var(--cardXS-width-desktop);
    }
`;

/*IMAGES*/
export const CardMainImage = styled(Img)`
    height: var(--cardMain-img-size);
    width: var(--cardMain-img-size);
    border-radius: var(--cardMain-radius) var(--cardMain-radius) 0 0;
`;
export const ImgCntrl = styled(Row)`
    height: var(--cardXS-imgCntrl-size);
    width: var(--cardXS-imgCntrl-size);
`;

export const CardXSImage = styled(Img)`
    height: var(--cardXS-img-size);
    width: var(--cardXS-img-size);
    border-radius: var(--cardXS-img-radius);

    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
`;

/* TEXT */ 
export const BodyCntrl = styled(Col)`
    height: ${props => props.height || '90%'};
    width: ${props => props.width || '90%'};
    justify-content: space-between;
    padding:0 0.5rem 0.5rem 0.5rem;
`

export const TitleCard = styled(Title)`
    /* justify-content: center; */
    font-size: var(--font-size-card-title);
    font-weight: bolder;
    padding:0.5rem 0;
        @media(min-width:820px){
            font-size: var(--font-size-card-title-desktop);
        }
`