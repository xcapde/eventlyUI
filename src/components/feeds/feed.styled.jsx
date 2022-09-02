import styled from "styled-components";

export const VerticalFeed = styled.div`
    display: grid;
    grid-template-columns: repeat(1fr);
    width: 100%;
    grid-gap: 1rem;

    @media (min-width: 820px) {
        width: 96%;
        grid-template-columns: repeat(auto-fill, minmax(14.5rem, 1fr));
        margin: 1% 2%;
    };
`;

export const HorizontalFeed = styled(VerticalFeed)`
    
`;