import styled from "styled-components";
import { Img } from "../../styles/styles.styled";

export const Logotip = styled(Img).attrs(props => ({
    src: props.imgUrl,
}))`
object-fit: contain;
width: 8rem;
padding: 3rem 0;
scale: ${props => props.scale || '100%'};

@media (min-width: 820px) {
    padding: 1rem 0;
}
`