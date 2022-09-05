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
color: var(--color-main-background);
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

