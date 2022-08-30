import styled from "styled-components";

export const LoginCnt = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const LoginBox = styled.div`
    background-color: var(--primaryColor);
    width: 30vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HighlightsBox = styled.div`
    background-color: var(--secondaryRadius);
    width: 70vw;
    height: 97vh;
`;

export const InputsBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Input = styled.input`
    background-color: var(--whiteColor);
    width: 325px;
    height: 3rem;
    border-radius: var(--secondaryRadius);
    border: none;
    margin-bottom: 2%;
    padding-left: 8px;

    &::placeholder{
        padding-left: 8px;
    }
`;

export const Button = styled.button`
    background-color: var(--secondaryColor);
    color: var(--primaryColor);
    width: 333px;
    height: 3rem;
    border-radius: var(--secondaryRadius);
    border-top-left-radius: 0;
    border: none;
    font-weight: 700;

    &:hover{
        background-color: var(--tertiaryColorHover);
    }

    &:active{
        background-color: var(--tertiaryColorActive);
    }
`;

export const BottomTxt = styled.h3`
    position: absolute;
    bottom: 3%;
    font-size: small;
`;

export const SecondaryTxt = styled.h3`
    position: relative;
    margin-top: 3%;
    font-size: small;
    text-align: end;
`;


