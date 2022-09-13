import styled from "styled-components";

export const ProfileGrid = styled.div`
    height: 100vh;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
    background-color: red;
    grid-gap: calc(30px - (3rem / 2) + 1.25rem);
    @media (min-width: 820px) {
        width: 85%;
    }
`