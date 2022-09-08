import styled from "styled-components";

export const Button = styled.button`
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px 32px;
`;

export const FormBtn = styled(Button)`
background-color: var(--button-color);
color: var(--color-white-contrast);
width: var(--form-button-width);
height: var(--form-button-height);
border-radius: var(--button-radius);
border-top-left-radius: 0;
font-weight: 700;
padding: none;

&:hover{
    background-color: var(--button-color-hover);
}

&:active{
    background-color: var(--button-color);
}
`;

export const MainButton = styled(Button)`
    height: var(--button-height);
    background-color: var(--button-color);
    border-radius: var(--button-radius);
    color: var(--button-text);  
    padding: 0 var(--button-padding);
    font-size:var(--font-size-button);
    font-weight: 500;

    &:hover{
        background-color: var(--button-color-hover);
    } 
    &:active{
        background-color: var(--button-color);
    }
`

export const SecondaryButton = styled(Button)`
    height: var(--button-height);
    border-style: solid;
    border-radius: var(--button-radius);
    border-width: var(--button-border-width);
    border-color:var(--button-color);
    color: var(--button-color);
    background: none;   
    &:hover{
        background-color: var(--button-color);
        color: var(--button-text);   
    }
`

export const LinkButton = styled.a`
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

export const BackArrowButton = styled.button`
    z-index: var(--index-back-button);
    border-radius: var(--back-button-radius);
    height: var(--back-button-size);
    width: var(--back-button-size);
    background-color:var(--back-button-color);
    position: fixed;
    top: 1rem;
    left: 1rem;
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
    top: 1rem;
    left: unset;
    right: 1rem;
`

export const TabButton = styled.button`
    margin-left: 5%;
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
