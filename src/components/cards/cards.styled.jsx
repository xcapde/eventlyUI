import styled from "styled-components";
import { Col, Img} from "../../styles/styles.styled";

/*SIZING*/
export const Card = styled(Col)`
    height: var(--card-height);
    width: var(--card-width);
    position: relative;
    background-color: var(--color-white);
    color: var(--color-detail-text);
    border-radius: var(--card-radius);
    box-shadow: 1px 2px 18px var(--card-shadow-opacity);
    @media (min-width: 820px) {
        height: var(--card-height-desktop);
        width: var(--card-width-desktop);
    }
`;

export const CardMid = styled(Card)`
    height: var(--cardMid-height);
    width: ${props => props.width || 'var(--cardMid-width)'};
    position: relative;
    margin: 0 1rem;
    background-color: var(--color-white);
    color: var(--color-detail-text);
    border-radius: var(--cardMid-radius);
    box-shadow: 1px 2px 18px var(--card-shadow-opacity);
    @media (min-width: 820px) {
        height: var(--cardMid-height-desktop);
        width: ${props => `calc( ${props.width} *.85)` || 'var(--cardMid-width-desktop)'};
    }
`;

export const CardXS = styled(Card)`
    flex-direction: row;
    width: var(--cardXS-width);
    height: var(--cardXS-height);
    justify-content: space-between;

    @media (min-width: 820px) {
        width: var(--cardXS-width-desktop);
    }
`;


/*IMAGES*/
export const CardImage = styled(Img)`
    padding: 0;
    border-radius: var(--card-radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`;

export const CardMidImage = styled(Img)`
    height: var(--cardMid-img-size);
    width: var(--cardMid-img-size);
    border-radius: var(--cardMid-radius) var(--cardMid-radius) 0 0;
    /* padding: 5%; */
    /* border-radius: var(--cardMid-radius) 0; */
`;

export const CardXSImage = styled(Img)`
    height: var(--cardXS-img-size);
    width: var(--cardXS-img-size);
    border-radius: var(--cardXS-img-radius);
    padding: 5%;
`;
