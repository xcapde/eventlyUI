import styled from "styled-components";
import { Col, Img, Title} from "../../styles/styles.styled";

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
        width: ${props => `calc( ${props.width} *.85)` || 'var(--cardMain-width-desktop)'};
    }
`;

export const CardXS = styled(CardMain)`
    flex-direction: row;
    width: var(--cardXS-width);
    height: var(--cardXS-height);
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

export const CardXSImage = styled(Img)`
    height: var(--cardXS-img-size);
    width: var(--cardXS-img-size);
    border-radius: var(--cardXS-img-radius);
    padding: 5%;
`;

/* TEXT */ 

export const TitleCard = styled(Title)`
    font-size: var(--font-size-card-title);
    font-weight: bolder;
    padding:0.25rem 0;
        @media(min-width:820px){
            font-size: var(--font-size-card-title-desktop);
        }
`