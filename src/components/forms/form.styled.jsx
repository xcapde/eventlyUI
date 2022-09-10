import styled from "styled-components";

export const BottomTxt = styled.h3`
    font-size: small;
    text-align: center;
    margin-top: 2rem;
    display: flex;

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
    width: 85%;
    height: fit-content;
    width: calc(var(--input-width) + 15%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(30px - (3rem / 2) + 1.25rem);
    @media (min-width: 820px) {
        width: 85%;
    }
`


export const Label = styled.label`
    position: absolute;
    left: 5%;
    /* display: ${props => props.display || "block"}; */
    line-height: var(--input-height);
    color: var(--color-detail-text);
    font-weight: 400;
    text-transform: capitalize;
   
`;

export const Input = styled.input`
    background-color: var(--color-white-contrast);
    height: var(--input-height);
    width: var(--input-width);
    margin-bottom: 2%;
    padding-left: 16px;
    border-radius: var(--input-radius);
    border: none;
    outline-color: var(--color-input-outline);
    &::placeholder{
        text-transform: capitalize;
    }
    @media (min-width: 820px) {
        margin-bottom: 1%;
    }
    :focus-within ~ ${Label},
    :valid ~ ${Label}{
        color: var(--color-main);
        top: -30px;
        left: 2.5%;
    }
`;

export const FormCntrl = styled.div`
    width: fit-content;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;  
`
export const Select = styled.select`
    background-color: var(--color-white-contrast);
    width: calc(var(--input-width) + 2rem);
    height: 3rem;
    border-radius: var(--input-radius);
    border: none;
    outline-color: var(--color-input-outline);
    margin-bottom: 2%;
    padding-left: 16px;
    &::placeholder{
        text-transform: capitalize;
    }
    @media (min-width: 820px) {
        margin-bottom: 1%;
    }
`