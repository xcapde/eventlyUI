import styled from "styled-components";

export const Wrapper = styled.div`
    z-index: var(--index-footer);
    position: fixed;
    bottom: 0;
    background-color: var(--color-white);
    display: flex;
    height: var(--footer-height);
    width: 100%;

    @media(min-width: 820px){
        display: none;
    }
`

export const Tab = styled.button`
    width: 20%;
    height: 100%;  
    color : var(--color-detail-text);

    & img{
        opacity: 0.6;
    }
    
    & i{
        font-size: var(--font-size-nav-icon);
    }
    & .gg-add-r {
        width: calc(var(--font-size-nav-icon) + 2px);
        height: calc(var(--font-size-nav-icon) + 2px);

        &::after{
            top: 6px;
            left: 10px;
        }
        &::before{
            top: 10px;
            left: 6px;
        }

    }
    &:hover{
        color: var(--button-color);
        
        & img{
        opacity: 1;
        /* border: var(--button-border-width) solid var(--button-color); */
        }
    }
`