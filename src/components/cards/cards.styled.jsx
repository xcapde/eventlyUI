import styled from "styled-components";
import { Col, Img, Row} from "../../styles/styles.styled";

export const Card = styled(Col)`
    box-shadow: 2px 2px 15px var(--card-shadow-opacity);   
    width: var(--card-width);
    height: var(--card-height);
    border-radius: var(--card-radius);
    background-color: var(--color-white);
    color: var(--color-detail-text);
    position: relative;
        & p{
            display: flex;
            align-items: center;
        }
        
        & i{
            display: flex;
            justify-content: center;
            color: var(--color-card-icon);
            margin: 0.15rem 0.2rem 0.15rem 0;
            width: 1.5rem;
        }

        @media (min-width: 820px) {
            width: var(--card-width-desktop);
            height: var(--card-height-desktop);
        }
`;

export const CardImage = styled(Img)`
    border-radius: var(--card-radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0;
    position: relative;
`;

export const CardHeader = styled(Row)`
    padding: 0.4rem 0;
    height: unset;
    width: 94%;
    @media (min-width: 820px) {
        width: 90%;
    }
`
export const CardTextDetails = styled(Row)`
    height: var(--card-details-height);
    align-items: flex-start;
    font-size: var(--font-size-card);

    @media (min-width: 820px) {
        font-size: var(--font-size-card-desktop);
    }
`

export const CardLocationSchedule = styled(CardTextDetails)`
    flex-direction: column;
    width: 65%;
    height: unset;
    padding: 0 0.3rem;
    @media (min-width: 820px) {
        width: 65%;
        padding: 0 0.2rem;
    }
`

export const CardParticipation = styled(Col)`
    width: 35%;
    height: 3rem;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 0.5rem;
    @media (min-width: 820px) {
        width: 35%;
    }
`

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

export const CardXSImage = styled(CardImage)`
    height: calc(var(--cardXS-height) - 1rem);
    width: calc(var(--cardXS-height) - 1rem);
    border-radius: var(--card-radius);
    margin: 0 .5rem;
`;

export const CardXSBody = styled(Col)`
    width:100%;
`

export const CardXSHeader = styled(CardHeader)`
    width: 92%;
`

export const CardXSTextDetails = styled(CardTextDetails)`
    height: var(--cardXS-details-height);
    font-size: var(--font-size-cardXS);
    font-weight: 600;
    padding-right: 0.5rem;
`
// CardMinimal
export const CardMinImg = styled(Img)`
    border-radius: var(--card-radius);
    padding: 0;
    position: relative;
`;

export const InfoOnImg = styled.div`
    z-index: 2;
    position: absolute;
    left: 0.5rem;
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