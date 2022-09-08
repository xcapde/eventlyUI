import styled from "styled-components";

export const Button = styled.button`
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border-radius: var(--button-radius);
    padding: 18px 32px;
`;

export const FormBtn = styled(Button)`
padding: unset;
background-color: var(--button-color);
color: var(--color-white-contrast);
width: var(--form-button-width);
height: var(--form-button-height);
border-top-left-radius: 0;
font-weight: 700;

&:hover{
    background-color: var(--button-color-hover);
}

&:active{
    background-color: var(--button-color);
}
`;

export const MainButton = styled(Button)`
    height: ${props => props.height || 'unset'};
    width: ${props => props.width || 'unset'};
    background-color: var(--button-color);
    color: var(--button-text);  
    font-size: ${props => props.fontSize || 'var(--font-size-button)'};
    font-weight: 500;

    &:hover{
        background-color: var(--button-color-hover);
    } 
    &:active{
        background-color: var(--button-color);
    }
`

export const SecondaryBtn = styled(Button)`
    height: var(--button-height);
    border-style: solid;
    border-width: var(--button-border-width);
    border-color:var(--button-color);
    color: var(--button-color);
    background: none;   
    &:hover{
        background-color: var(--button-color);
        color: var(--button-text);   
    }
`

export const LinkBtn = styled.p`
    background:none;
    color: var(--color-link-text);
    text-transform: capitalize;
    font-weight: bolder;
    padding: 0 0.2rem;

    &:hover {
        color: var(--color-link-text-hover);
    }
    &:active {
        color: var(--color-link-text);
    }
`

export const DetailButton = styled(MainButton)`
        height: var(--detail-button-heigth);
        width: var(--detail-button-widht);
        font-size:var(--font-size-detall-button);
`

export const BackArrowButton = styled(Button)`
    z-index: var(--index-back-button);
    height: var(--back-button-size);
    width: var(--back-button-size);
    background-color:var(--back-button-color);
    padding: unset;
    position: fixed;
    top: var(--header-button-position-top);
    left: var(--header-button-position-side);

        &:hover{
            background-color:var(--back-button-color-hover);
        }
        & i{
            color:var(--back-button-color-icon) !important;
            font-size: var(--font-size-back-icon);
            margin:0 !important;

        }
`

export const BurgerBtn = styled(BackArrowButton)`
    position: absolute;
    left: unset;
    top: var(--header-button-position-top);
    right: var(--header-button-position-side);
`

export const TabButton = styled(Button)`
    padding: unset;
    font-weight: var(--tab-button-weight);
    font-size: var(--font-size-tab-button);
    color: var(--tab-button-disabled);
    
    &:hover{
        color: var(--button-color-hover);
    }
    &:active{
        color: var(--button-color);
    }
`

export const ContentTabButton = styled(TabButton)`
    font-size:var(--font-size-detall-tab-button);
    width: 50%;
    height: 1.5rem;
    display: flex;
    justify-content: start;
    text-transform: capitalize;
    font-weight: 600;
`

export const FooterTabButton = styled(TabButton)`
    width: 20%;  
    & img{
        height: var(--font-size-nav-icon);
        width: var(--font-size-nav-icon);
        opacity: 0.6;
    }
    & i{
        font-size: var(--font-size-nav-icon);
    }
    & .gg-add-r {
        width: calc(var(--font-size-nav-icon) + 2px);
        height: calc(var(--font-size-nav-icon) + 2px);

        &::after{
            top: 6px;
            left: 10px;
        }
        &::before{
            top: 10px;
            left: 6px;
        }
    }
    &:hover{
        color: var(--button-color);
        & img{
        opacity: 1;
        }
    }
`