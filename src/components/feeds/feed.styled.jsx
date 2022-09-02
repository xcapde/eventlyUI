import styled from "styled-components";

export const VerticalFeed = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    grid-gap: 1rem;
    /* grid-auto-columns: var(--columnWidht); */
    /* grid-auto-flow: auto; */
    margin: 0 2rem;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    };
`;

export const HorizontalFeed = styled(VerticalFeed)`
    
`;