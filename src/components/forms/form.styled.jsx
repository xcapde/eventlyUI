import styled from "styled-components";

//a convertir en components de react
export const HighlightsBox = styled.div`
    background-color: var(--secondaryRadius);
    width: 70vw;
    height: 97vh;
`;

export const BottomTxt = styled.h3`
    font-size: small;
    text-align: center;
    & a{
        color: var(--secondaryColor);
        text-transform: capitalize;
        &:hover {
            color: var(--tertiaryColorHover);
        }
        &:hover {
            color: var(--tertiaryColorActive);
        }
    }
`;

export const SecondaryTxt = styled.h3`
    font-size: small;
    text-align: center;
`;

//new
export const Form = styled.form`
    width: 85%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(var(--inputWidth) + 15%);
    @media (max-width: 820px) {
        width: 30vw;
    }
`

export const FormControl = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const Input = styled.input`
    background-color: var(--whiteColor);
    width: var(--inputWidth);
    height: 3rem;
    border-radius: var(--secondaryRadius);
    border: none;
    margin-bottom: 5%;
    padding-left: 16px;

    &::placeholder{
        /* padding-left: 8px; */
    }
`;
