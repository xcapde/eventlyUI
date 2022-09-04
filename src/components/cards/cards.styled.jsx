import styled from "styled-components";
import { Col, Img, Row, Title} from "../../styles/styles.styled";
import { MainButton } from "../buttons/buttons.styled";
import { Schedule } from "../subcomponents/subcomponents.styled";

export const Card = styled(Col)`
    filter:drop-shadow(0rem 0rem .2rem var(--darkShadowOpacity));
    width: 95%;
    height: 26rem;
    border-radius: var(--cardRadius);
    background-color: var(--whiteColor);
    color: var(--detailsTextColor);
        & p{
            display: flex;
            align-items: center;
        }
        
        & i{
            display: flex;
            justify-content: center;
            color: var(--semiDarkTextColor);
            margin: 0.15rem 0.2rem 0.15rem 0;
            width: 1.5rem;
        }

        @media (min-width: 820px) {
            width: var(--cardWidth);
            height: var(--cardHeight);
        }
`;

export const CardImage = styled(Img)`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: var(--cardRadius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 0;
    position: relative;

    @media (min-width: 820px) {
            height: var(--cardWidth) ;
            width: var(--cardWidth);
        }
`;

export const CardText = styled(Col)`
    width: 94%;
    align-items: flex-start;
    font-size: medium;

    @media (min-width: 820px) {
        font-size: small;
    }
`

export const ExtremsRow = styled(Row)`
    justify-content: space-between;
    padding: 0.8rem 0;

    @media (min-width: 820px) {
        padding: 0.5rem 0;
    }
`
export const CardTitle = styled(Title)`
    font-size: x-large;
    @media (min-width: 820px) {
        font-size: large;
    }
`

export const CardSchedule = styled(Schedule)`
`

export const CardButton = styled(MainButton)`
    padding: 0 var(--buttonPadding);
`

