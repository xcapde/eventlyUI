import styled from "styled-components";


export const BadgeBox = styled.div`
    border-radius: var(--badge-radius);
    font-size: var(--font-size-button);
    text-transform:uppercase;
    padding: var(--badge-padding);
    font-weight: var(--badge-font-weight);
    display: flex; 
    width: fit-content;
    justify-content: center;
    align-items: center;
    color: ${props => props.color || 'var(--color-badgetText-default)'};
    background-color: ${props => props.backgroundColor || 'var(--color-badgetBG-default)'};
    margin: var(--badge-margin);
    vertical-align: center;
    
    & i{
        color:${props => props.iconcolor};
        margin-left: 0.5rem;

    }
`