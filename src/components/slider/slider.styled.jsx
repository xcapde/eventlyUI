import styled from "styled-components";
import { Breakpoint } from "../../styles/styles.styled";

export const Wrapper = styled.div`
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 10%;
    right: 2%;
    display: grid;
    grid-template-columns: auto;
    place-content: center;
    border-radius: 0.25rem;
    background-color: rgba(49, 181, 149, .6);
    background-color: rgba(255, 255, 255, .6);
    padding: 8px;
    & > article{
        padding: 5% 0;
    }
    @media(min-width:${Breakpoint.md}){
            top: unset;
            bottom: 3%;
            right: 3%;
            display: flex;
            flex-direction: row;
            padding: 8px;
            grid-gap: 5%;
            cursor: pointer;
            outline: none;
            & > article{
            padding: .5% 0%;
        }
    }
    
`;