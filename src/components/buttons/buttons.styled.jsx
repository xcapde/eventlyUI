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
background-color: var(--secondaryColor);
color: var(--mainBackgroundColor);
width: 333px;
height: 3rem;
border-radius: var(--buttonRadius);
border-top-left-radius: 0;
font-weight: 700;
padding: none;

&:hover{
    background-color: var(--tertiaryColorHover);
}

&:active{
    background-color: var(--tertiaryColorActive);
}
`;

export const MainButton = styled.button`
    height: var(--buttonHeight);
    background-color: var(--buttonMainColor);
    border-radius: var(--buttonRadius);
    color: var(--buttonSecondaryColor);  
    &:hover{
        background-color: #29a85e;
        color: var(--buttonSecondaryColor);   
    } 
`

export const SecondaryButton = styled.button`
    height: var(--buttonHeight);
    border-style: solid;
    border-radius: var(--buttonRadius);
    border-width: var(--buttonBorderWidth);
    border-color:var(--buttonMainColor);
    color: var(--buttonMainColor);
    background: none;   
    &:hover{
        background-color: var(--buttonMainColor);
        color: var(--buttonSecondaryColor);   
    }
`

