import styled from "styled-components";
import { Col, Row } from "../../styles/styles.styled";

export const Wrapper = styled(Col)`
   display: none;
    
   @media (min-width: 820px) {
        display: flex;
        height: 99.9%;
        width: ${props => props.width || '5%'};
        position: fixed;
        top: 0;
        left: 0;
        z-index: var(--indexSidebar);
        border-radius: 0 1.15rem 1.15rem 0;
        background-color: darkgreen;
        cursor: pointer;
        -webkit-transition: width 3s;
        transition: width 3s;
        justify-content: space-between;
        & > *{
            width: 100%;
            gap: 3rem;
        }    
    }

    &:hover{
        width: 15%;
    }

    &:hover #sidebar-content{
        display: flex;
        color: white;
        transition: color 4s display 2s; 
    }
`;

export const SideBarItemRow = styled(Row)`
    width: 85%;
    padding: 5% 0;
    gap: 5%;
    margin: 0 auto;
    &:hover{
        background-color: rgba( 255, 255, 255, 55%);
        border-radius: .25rem;
    }
`;

export const SideBarItemIconCol = styled(Col)`
    width: 30%;
`;

export const SideBarItemContent = styled(Col)`
    width: 80%;
    display: ${props => props.sub ? 'flex' : 'none'};
    color: ${props => props.sub ? 'white' : 'transparent'};
    align-items: baseline;
    transition: color 4s display 2s;
`;

export const SideBarIcon = styled.span`
    font-size: xx-large;
    color: white;
    &:hover{
        color: lightgray;
    }
`

export const Aside = styled.aside`
    min-width: fit-content;
    /* min-height: 25%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    top: 0%;
    top: calc(${props => props.top} - 1.1rem);
    left: 15%;
    height: fit-content;
    width: 15.5%;
    gap: 5%;
    background-color: darkgreen;
    position: absolute;
    border-radius: .75rem;
    z-index: 1;
    row-gap: 1rem;
    padding: 1rem;
    cursor: pointer;
    transition: all 2s;
`;