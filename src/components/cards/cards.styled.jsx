import styled from "styled-components";
import { Col, Img, Row} from "../../styles/styles.styled";

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
export const CardHeader = styled(Row)`
    height: unset;
    width: 94%;
    padding: 0.4rem 0;
    @media (min-width: 820px) {
        width: 90%;
    }
`
/*text-cont*/
export const DetailCardText = styled(Row)`
    height: var(--card-details-height);
    align-items: flex-start;
    font-size: var(--font-size-card);
    @media (min-width: 820px) {
        font-size: var(--font-size-card-desktop);
    }
`
export const CardLocationSchedule = styled(DetailCardText)`
    height: unset;
    width: 65%;
    flex-direction: column;
    padding: 0 0.3rem;
    @media (min-width: 820px) {
        width: 65%;
        padding: 0 0.2rem;
    }
`;
/*IMAGES*/
export const CardImage = styled(Img)`
    position: relative;
    padding: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-radius: var(--card-radius);
`;
// CardMinimal
export const CardMinImg = styled(Img)`
    border-radius: var(--card-radius);
    padding: 0;
    position: relative;
`;
export const CardXSImage = styled(CardImage)`
    height: calc(var(--cardXS-height) - 1rem);
    width: calc(var(--cardXS-height) - 1rem);
    border-radius: var(--card-radius);
    margin: 0 .5rem;
`;



/*REFACTOR TO REACT COMPONENT (AVATARS MAP)*/
export const CardParticipation = styled(Col)`
    height: 3rem;
    width: 35%;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 0.5rem;
    @media (min-width: 820px) {
        width: 35%;
    }
`


/*REFACTOR TO REACT COMPONENT*/
export const InfoOnImg = styled.div`
    position: absolute;
    left: 0.5rem;
    z-index: 2;
    @media (min-width: 820px) {
        bottom: 8rem;
    }

    & h1, p{
        font-weight:600;
        font-size: medium;
        color:white;
        padding:0.5rem;
        @media (min-width: 820px) {
            font-size: smaller;
            padding:0.2rem;
        }
    }
    & i{
        font-size: medium;
        color:#ffffffb2;
        padding-right: 0.3rem;
        @media (min-width: 820px) {
            font-size: medium;
        }
    }
    
`

/*REFACTOR TO REACT COMPONENT*/
export const CardBody = styled.div`
    z-index: 1;
    background: linear-gradient(40deg, #ffffffe4, #ffffffa6);
    background:none;
    border-radius: var(--card-radius);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    width: 100%;
    height: auto;
    position:absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
        & div{
            width: 90%;
            margin: 1rem 0;

        }
        & h1{
            font-size: x-large;
            padding: 0.5rem;
            width: 90%;
            height: 2.2rem;
            color: white;
            @media (min-width: 820px) {
                font-size: medium;
                height: 1rem;
            }
        }
        & p{
            font-size: small;
            font-weight: bold;
            color: #ffffffb3;

        }
        & i{
            color: #ffffffb3;
        }
`