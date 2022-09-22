import styled from "styled-components";
import { Breakpoint, Col, Img, Row, Title} from "../../styles/styles.styled";

/*SIZING*/
export const CardMain = styled(Col)`
    height: var(--cardMain-height);
    width: ${props => props.width || 'var(--cardMain-width)'};
    position: relative;
    margin: 0 1rem;
    background-color: var(--color-white);
    color: var(--color-detail-text);
    border-radius: var(--cardMain-radius);
    box-shadow: 0px 0px 5px var(--card-shadow-opacity);;
    @media (min-width:${Breakpoint.md}) {
        height: var(--cardMain-height-desktop);
        /* width: ${props => `calc( ${props.width} *.85)` || 'var(--cardMain-width-desktop)'}; */
        width: var(--cardMain-width-desktop);
    }
`;

export const CardXS = styled(CardMain)`
    width: var(--cardXS-width);
    /* max-width: 400px; */
    height: var(--cardXS-height);
    flex-direction: row;
    justify-content: space-between;
/* 
    @media (min-width:${Breakpoint.md}) {
        width: var(--cardXS-width-desktop);
    } */
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
    justify-content: ${props => props.justifyContent || 'flex-start'};
    font-size: var(--font-size-card-title);
    font-weight: bolder;
    padding:0.5rem 0;
        @media(min-width:${Breakpoint.md}){
            font-size: var(--font-size-card-title-desktop);
        }
`

export const NotiCard = styled.article`
    max-height: 9rem;
    height: fit-content;
    min-height: 7rem;
    left: ${props => props.left};
    grid-column: ${props => props.col || '2/13'};
    box-shadow: 0px 0px 8px lightgray;
    border-radius: 1.25rem 0 0 1.25rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-auto-flow: column;
    place-content: center;
    transition: left 1.5s linear;
    & > p:nth-child(1){
        height: fit-content;
        grid-column: 2/7;
        grid-row: 2/3;
        font-weight: 900 !important;
        color: var(--color-dark);
    }
    & > p:nth-child(2){
        grid-column: 2/7;
        grid-row: 3/4;
        font-weight: lighter;
        line-height: 125%;
        & > a{
            color: var(--color-main);
            text-decoration: underline !important;
            display: initial;
        }
    }
`;

export const NotiStatus = styled.div`
    height: 8px;
    width: 8px;
    grid-column: 7/8;
    grid-row: 1/2;
    background-color: ${props => props.color || 'var(--color-main)'};
    align-self: flex-end;
    justify-self: center;
    border-radius: 50%;
`;

export const CreatedAt = styled.span`
    font-size: xx-small;
    font-family: var(--numbers-font);
    grid-column: 6/12;
    grid-row: 4/5;
    align-self: center;
`;