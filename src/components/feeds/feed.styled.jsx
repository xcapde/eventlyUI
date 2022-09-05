import styled from "styled-components";

export const VerticalFeed = styled.div`
    display: grid;
    grid-template-columns: repeat(1fr);
    width: 100%;
    grid-gap: 1.5rem 1rem;
    justify-items: center;
    margin-top: 5%;

    @media (min-width: 820px) {
        width: 96%;
        grid-template-columns: repeat(auto-fill, minmax(calc(var(--card-width-desktop) + .2rem), 1fr));
        margin: 1% 2%;
    };
`;