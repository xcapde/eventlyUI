import styled from "styled-components";
import { Breakpoint } from "../../styles/styles.styled";


export const BadgeCnt = styled.div`
    width: fit-content;
    max-height: .65rem;

    display: flex; 
    justify-content: center;
    align-items: center;
    column-gap: 5px;

    margin: var(--badge-margin);
    padding: var(--badge-padding);

    font-family: var(--detail-font);
    font-size: var(--font-size-badge);
    font-weight: var(--badge-font-weight);
    text-transform: uppercase;
    white-space: nowrap;

    color: ${props => props.color || 'var(--color-badgetText-default)'};
    background-color: ${props => props.backgroundColor || 'var(--color-badgetBG-default)'};

    border-radius: var(--badge-radius);
    @media(min-width:${Breakpoint.md}){
        cursor: pointer;
        outline: none;
    }
`;