import styled from "styled-components";

export const Wrapper = styled.div`
        height: fit-content;
        width: fit-content;
        position: absolute;
        bottom: 2%;
        right: 2%;
        display: grid;
        grid-template-columns: repeat(autofill, minmax(var(--slider-cube)),1fr);
        grid-auto-flow: column;
        grid-gap: 1rem;
        place-content: center;
        border-radius: 0.25rem;
        background-color: rgba(255,255,255,.6);
        padding: 0.5rem 0.9rem;
    & > article{
        padding: 5% 0;
    }
`;