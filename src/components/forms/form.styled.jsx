import styled from "styled-components";

export const BottomTxt = styled.h3`
    font-size: small;
    text-align: center;
    margin-top: 2rem;
    & a{
        color: var(--color-link-text);
        text-transform: capitalize;
        font-weight: bold;
        &:hover {
            color: var(--color-link-text-hover);
        }
        &:active {
            color: var(--color-link-text);
        }
    }

    @media (min-width: 820px) {
        margin-top: 1rem;
    }
`;

export const SecondaryTxt = styled.h3`
    font-size: small;
    text-align: center;
`;

//new
export const Form = styled.form`
    width: 30vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(var(--input-width) + 15%);
    @media (min-width: 820px) {
        width: 85%;
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
    background-color: var(--color-white);
    width: var(--input-width);
    height: 3rem;
    border-radius: var(--input-radius);
    border: none;
    outline-color: var(--color-input-outline);
    margin-bottom: 2%;
    padding-left: 16px;

    @media (min-width: 820px) {
        margin-bottom: 1%;
    }
`;
