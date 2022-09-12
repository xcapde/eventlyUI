import styled from "styled-components";
import { Col, Img} from "../../styles/styles.styled";

/*SIZING*/
export const Card = styled(Col)`
    height: var(--card-height);
    width: var(--card-width);
    position: relative;
    background-color: var(--color-white);
    color: var(--color-secondary-text);
    border-radius: var(--card-radius);
    box-shadow: 1px 2px 18px var(--card-shadow-opacity);
    @media (min-width: 820px) {
        height: var(--card-height-desktop);
        width: var(--card-width-desktop);
    }
`;

// CardSmall
export const CardXS = styled(Card)`
    flex-direction: row;
    width: var(--cardXS-width);
    height: var(--cardXS-height);
    justify-content: space-between;

    @media (min-width: 820px) {
        width: var(--cardXS-width-desktop);
    }
`;


/*POSITIONING*/

/*text-cont*/

/*IMAGES*/
export const CardImage = styled(Img)`
    height: var(--card-img-height);
    padding: 0;
    border-radius: var(--card-radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`;

export const CardXSImage = styled(CardImage)`
    height: calc(var(--cardXS-height) - 20px);
    width: calc(var(--cardXS-height) - 20px);
    border-radius: var(--card-radius);
    margin: 0 10px;
`;


/*REFACTOR TO REACT COMPONENT (AVATARS MAP)*/
// export const CardParticipation = styled(Col)`
//     height: 3rem;
//     width: 35%;
//     justify-content: space-between;
//     align-items: flex-end;
//     padding-right: 0.5rem;
//     @media (min-width: 820px) {
//         width: 35%;
//     }
// `
