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
width: 333px;
height: 3rem;
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

export const MainButton = styled.button`
    height: var(--button-height);
    background-color: var(--button-color);
    border-radius: var(--button-radius);
    color: var(--button-text);  
    padding: 0 var(--button-padding);

    &:hover{
        background-color: var(--button-color-hover);
    } 
    &:active{
        background-color: var(--button-color);
    }
`

export const SecondaryButton = styled.button`
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

