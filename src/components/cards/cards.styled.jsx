import styled from "styled-components";
import { AvatarImg, Col, Img, Title} from "../../styles/styles.styled";
import { Schedule } from "../subcomponents/subcomponents.styled";

export const Card = styled(Col)`
    width: var(--cardWidth);
    height: var(--cardHeight);
    border-radius: var(--cardRadius);
    background-color: var(--whiteColor);
    filter:drop-shadow(0rem 0rem .2rem var(--darkShadowOpacity));
    color: var(--detailsTextColor);
    justify-content: space-between ;
    padding:0.7rem;

        & i{
            color: var(--secondaryColor);
        }
`;

export const ImageCard = styled(Img)`
    width: 13rem;
    height: 13rem;
    object-fit: cover;
    border-radius: var(--cardRadius);
    padding: 0;
    margin-bottom: 0.3rem;
    position: relative;
`;

export const AvatarImgOnImg = styled(AvatarImg)`
    z-index: 1;
    position: absolute;
    top: 1rem;
    left: 1rem;
`;

export const CardTitle = styled(Title)`
    width: 100%;
`

export const CardSchedule = styled(Schedule)`
    margin-left: 2%;
    font-size:small;
    width: 5rem;
    text-align:end;
`

