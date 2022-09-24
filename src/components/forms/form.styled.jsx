import styled from "styled-components";
import { FormBtn } from "../buttons/buttons.styled";

export const Form = styled.form`
    height: 100%;
    width: calc(var(--input-width) + 15%);
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    place-content: ${props => props.justify || 'flex-start'};
    margin: 0 auto;
    grid-gap: calc(30px - (3rem / 2) + 1.25rem);
    & > div{
        margin: 0 auto;
    }
    & > ${FormBtn}{
        position: absolute;
        display: block;
        bottom: 0;
        left: calc((100% - var(--form-button-width)) / 2);
    }
    @media (min-width: 820px) {
        width: 100%;
        place-content: ${props => props.justifyD || 'flex-start'};;
    }
`

export const Label = styled.label`
    position: absolute;
    left: 5%;
    display: ${props => props.display || "block"};
    line-height: var(--input-height);
    color: var(--color-detail-text);
    font-weight: 400;
    text-transform: capitalize;
    /* transition: 1s ease; */
`;

export const CreatableLabel = styled.label`
    position: absolute;
    z-index: 1;
    left: 5%;
    line-height: calc( var(--input-height));
    color: var(--color-detail-text);
    font-weight: 400;
    text-transform: capitalize;
    /* transition: 1s ease; */
    &:hover{
        top: -40px;
        left: 2.5%;
        color: var(--color-main);
    }
`;

export const Input = styled.input`
    height: var(--input-height);
    width: var(--input-width);
    display: ${props => props.display || 'block'};
    background-color: var(--color-white-contrast);
    /* margin-bottom: 2%; */
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
        display: block;
        top: -40px;
        left: 2.5%;
        color: var(--color-main);
    }
`;

export const Searcher = styled.form`
    width: 85%;
    height: var(--input-height);
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    & input{
        width: 100%;
        padding-left: 3.5rem;
        margin: 0 0.5rem 0 0;
    }
    &:hover button{
        color: var(--color-detail-icon);
    }
`

export const FormGrid = styled(Form)`
    position: relative;
    display: grid;
    place-content: ${props => props.placeContent || 'center'};
    grid-template-columns: ${props => props.styles.grid || 'repeat(2,1fr)'};
    grid-template-rows: auto;
    grid-column-gap: 0%;
    & > div{
        grid-column-start: 1;
        grid-column-end: 2;
        margin: 0 auto;
        & > input{
            width: ${props => props.styles.inputWidth || 'calc(var(--input-width) / 2.5)'} ;
        }
    }
    & > div:nth-of-type(4){
        grid-column-start: 1;
        grid-column-end: 3;
        & > input{
            width: var(--input-width);
        }
    }
    & > div:nth-of-type(2), & > div:nth-of-type(6){
        grid-column-start: 2;
        grid-column-end: 2;
    }
    @media (min-width: 820px) {
        grid-column-gap: 14%;
        place-content: ${props => props.styles.placeContent || 'flex-start'};
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
    width: calc(var(--input-width) + 1.75rem);
    height: var(--input-height);
    border-radius: var(--input-radius);
    border: none;
    outline-color: var(--color-input-outline);
    /* margin-bottom: 2%; */
    padding-left: 16px;
    &::placeholder{
        text-transform: capitalize;
    }
    @media (min-width: 820px) {
        margin-bottom: 1%;
    }
    :focus-within ~ ${Label},
    :focus:valid ~ ${Label},
    :valid  ~ ${Label}{
        display: block;
        top: -40px;
        left: 2.5%;
        color: var(--color-main);
    }
    :not(:focus):disabled ~ ${Label}{
        display: none;
    }
`
export const OutputCnt = styled.div`
    width: fit-content;
    max-width: 95vw;
    min-width: 50vw;
    height: 100%;
    display: grid;
    grid-auto-rows: max-content;
    place-content: center;
    gap: 0.5rem;
    grid-template-columns: auto auto;
    grid-auto-flow: row;
`;

export const SmallForm = styled.form`
    width: calc((var(--input-width) + 15%) / 3);
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 5%;
    place-content: center;
    margin: 0 auto;
    & input{
        width: calc( var(--input-width) / 3 );
    }
`;

export const BottomTxt = styled.h3`
    height: 15%;
    display: flex;
    text-align: center;
    font-size: small;
    margin-top: 1rem
`;

export const SecondaryTxt = styled.h3`
    font-size: small;
    text-align: center;
`;