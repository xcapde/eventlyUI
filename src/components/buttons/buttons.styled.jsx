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
color: var(--primaryColor);
width: 333px;
height: 3rem;
border-radius: var(--secondaryRadius);
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