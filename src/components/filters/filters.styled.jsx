import styled from "styled-components"  

export const FilterCnt = styled.form`
    width: 100%;
    max-width: 600px;
    position: absolute;
    top: 15vh;
    left: 0;
    padding:0;
    box-shadow: 0px 4px 2px var(--card-shadow-opacity);

    @media(min-width: 820px){
        width: 30rem;
    }
`