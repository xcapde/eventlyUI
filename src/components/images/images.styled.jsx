import styled from "styled-components";
import { Img } from "../../styles/styles.styled";

export const SmallPreview = styled.article`
    height: 8rem;
    width: 8rem;    
    position: relative;
    border-radius: .25rem;
    scale: ${props => props.scale || 1};
`
export const NoPreviewSmall = styled(SmallPreview)`
    background-color: var(--color-white);
    border: 2px dashed var(--color-main);
    color: var(--color-main);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: x-large;
    &::before{
        font-family: "Font Awesome 6 Free";
        font: var(--fa-font-solid); 
	    font-weight: 900;
	    content: "\f030";
    }
`;

export const SmallPreviewImg = styled(Img)`
    object-fit: cover;
    border-radius: .25rem;
`;

export const IconBg = styled.span`
    height: 1rem;
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5%;
    right: 5%;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: .25rem;
    filter: drop-shadow(1px 1px 2px #4f6a64);
    &::after{
        font: var(--fa-font-solid);
        font-weight: 900;
        content: "\f00d";
        color: indianred;
        margin-right: 10%;
        margin-top: 12.5%;
    }
`;

export const PartAvatar = styled(Img)`
    height: 30px;
    width: 30px;
    position: relative;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid white;
    left: ${props => props.left};
`;

export const SliderPreview = styled(SmallPreview)`
    height: 4rem;
    width: 4rem; 
`;