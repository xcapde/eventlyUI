import styled from "styled-components"

export const Wrapper = styled.header`
height: var(--navbar-top-height);
width: 100vw;
top: 0;
position: fixed;
display: flex;
align-items: center;
justify-content:center;
background-color: var(--color-navtop);
z-index: var(--index-navtop);
box-shadow: 2px 0px 30px lightgrey;
border-radius: var(--navtop-radius);
border: 1px solid lightgray;

@media(min-width: 820px){
    display: none;
}
`