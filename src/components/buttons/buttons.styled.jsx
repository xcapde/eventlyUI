import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:var(--detail-font);
    background: none;
    padding: var(--button-padding);
    border: none;
    border-radius: var(--button-radius);
    outline: none;
    box-shadow: none;
    cursor: pointer;
`;

export const FormBtn = styled(Button)`
    width: var(--form-button-width);
    height: var(--form-button-height);
    font-weight: 400;
    font-size: var(--font-size-form-button);
    background-color: var(--button-color);
    color: var(--button-text);
    text-transform: capitalize;
    border-top-left-radius: 0;
    padding: unset;
    &:hover{
        background-color: var(--button-color-hover);
    }
    &:active{
        background-color: var(--button-color);
    }
`;

export const MainButton = styled(FormBtn)`
    width: var(--main-button-width);
    height: var(--main-button-height);
    font-size: var(--font-size-button);
`

export const SecondaryBtn = styled(Button)`
    height: var(--button-height);
    width: fit-content;
    font-size: var(--font-size-button-detail);
    background-color: var(--color-white);   
    color: var(--button-color);
    border: var(--button-border-width) solid var(--button-color);
    
    &:hover{
        background-color: var(--button-color);
        color: var(--button-text);   
    }
`

export const LinkBtn = styled.p`
    text-transform: capitalize;
    font-family: var(--detail-font);
    font-weight: 500;    
    background:none;
    color: ${props => props.color || 'var(--color-link-text)'};
    padding: 0 0.2rem;
    text-decoration: underline;
    &:hover {
        color: ${props => props.color || 'var(--color-link-text-hover)'};
    }
    &:active {
        color: ${props => props.color || 'var(--color-link-text)'};
    }
`

export const OpacityButton = styled(Button)`
    height: var(--opacity-button-size);
    width: var(--opacity-button-size);
    position: absolute;
    font-size: var(--font-size-opacity-icon);
    background-color:var(--opacity-button-color);
    backdrop-filter: blur( 3px );
    color:var(--opacity-button-color-icon);
    z-index: var(--index-opacity-button);
    &:hover{
        background-color:var(--opacity-button-color-hover);
    }
    &::before{
        font-family: "Font Awesome 6 Free";
        font: var(--fa-font-solid); 
	    font-weight: 900;
    }
`

export const BackArrowButton = styled(OpacityButton)`
    top: var(--header-button-position-top);
    left: var(--header-button-position-side);
    &::before{
	    content: "\f060";
    }
`

export const EllipsisBtn = styled(OpacityButton)`
    top: var(--header-button-position-top);
    right: var(--header-button-position-side);
    &::before{
	    content: "\f141";
    }
`

export const CloseBtn = styled (OpacityButton)`
    top: var(--header-button-position-top);
    right: var(--header-button-position-side);
    &::before{
	    content: "\f00d";
    }
`

export const BurgerBtn = styled (OpacityButton)`
    position: absolute;
    top: var(--header-button-position-top);
    right: var(--header-button-position-side);
    &::before{
	    content: "\f0c9";
    }
`

export const TabButton = styled(Button)`
    min-height: 1.5rem;
    width: 45%;
    display: flex;
    justify-content: center;
    font-size:var(--font-size-detall-tab-button);
    font-weight: 500;
    color: ${props => props.color || 'var(--color-secondary-text)'};
    text-transform: capitalize;
    outline: none;
    &:hover{
        color: var(--button-color-hover);
    }
    &:active{
        color: var(--button-color);
    }
`

export const UploadButton = styled.button`
    height: var(--back-button-size);
    width: 85px;
    font-family: var(--font-main);
    font-size: var(--font-size-button-detail);
    font-weight: 400;
    background-color: var(--color-white);
    color: var(--button-color);
    border-radius: var(--button-radius);
    border: var(--button-border-width) solid var(--button-color);
    padding: unset;
    cursor:pointer;
    &:hover, &:focus{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        transition: all 2s ease , width 1s ease, height 1s ease, border-radius 1s ease;
    }
`;

export const AddBtn = styled.button`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    color: var(--color-main);
    background-color: var(--color-white);
    border: 1px solid var(--color-main);
    border-radius: 50%;
    font-size: xx-large;
    position: relative;
    left: 30%;
    /* &::before{
        font-family: "Font Awesome 5 Free";
        font: var(--fa-font-solid); 
	    font-weight: 900;
	    content: "+";
    } */
`;

export const TrashIcon = styled.span`
    height: 1rem;
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    display: contents;
    color: var(--color-main);
    cursor:pointer;
    &::after{
        font: var(--fa-font-solid);
        font-weight: 900;
        content: "\f2ed";
    }
    &:hover{
        color: indianred;
    }
`;