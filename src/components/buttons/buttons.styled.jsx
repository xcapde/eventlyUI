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
    color: var(--color-white-contrast);
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

export const MainButton = styled(Button)`
    /* height: ${props => props.height || 'unset'};
    width: ${props => props.width || 'unset'}; */
    font-size: ${props => props.fontSize || 'var(--font-size-button)'};
    font-weight: 500;
    color: var(--button-text);
    background-color: var(--button-color);  
    &:hover{
        background-color: var(--button-color-hover);
    } 
    &:active{
        background-color: var(--button-color);
    }
`

export const SecondaryBtn = styled(Button)`
    height: var(--button-height);
    width: fit-content;
    font-size: var(--font-size-button-detail);
    background: none;   
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

export const DetailButton = styled(MainButton)`
    height: var(--detail-button-heigth);
    width: var(--detail-button-widht);
    font-size:var(--font-size-detall-button);
`

export const BackArrowButton = styled(Button)`
    height: var(--back-button-size);
    width: var(--back-button-size);
    position: fixed;
    top: var(--header-button-position-top);
    left: var(--header-button-position-side);
    background-color:var(--back-button-color);
    padding: unset;
    z-index: var(--index-back-button);
    &:hover{
        background-color:var(--back-button-color-hover);
    }
    & i{
        font-size: var(--font-size-back-icon);
        color:var(--back-button-color-icon) !important;
        margin:0 !important;

    }
`

export const BtnCont = styled(BackArrowButton)`
    position: absolute;
    left: unset;
    top: var(--header-button-position-top);
    right: var(--header-button-position-side);
`
/*REFACTOR TABS*/
export const TabButton = styled(Button)`
    font-weight: var(--tab-button-weight);
    font-size: var(--font-size-tab-button);
    color:${props => props.color || 'var(--tab-button-disabled)'};
    padding: unset;
    &:hover{
        color: var(--button-color-hover);
    }
    &:active{
        color: var(--button-color);
    }
`
//
export const ContentTabButton = styled(TabButton)`
    min-height: 1.5rem;
    width: 45%;
    display: flex;
    justify-content: center;
    font-size:var(--font-size-detall-tab-button);
    font-weight: 600;
    color: ${props => props.color || 'var(--color-detail-text)'};
    text-transform: capitalize;
    outline: none;
`

export const UploadButton = styled(SecondaryBtn)`
    &::before{
        content:"Upload"
    }
    &:hover, &:focus + #input:valid{
        height: 50px;
        width: 50px;
        background-color: var(--color-white);
        border: 2px solid var(--color-main);
        border-radius: 50%;
        padding: unset;
        transition: all 2s ease;
        &::before{
            content:""
        }
    }
    &:active> #upload:valid{
        &::before{
            content:"tic";
        }
    }
`;