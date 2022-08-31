import styled from "styled-components";

export const Logotip = styled.img.attrs(props => ({
    src: props.imgUrl,
}))`
width: 8rem;
padding: 3rem 0;
`