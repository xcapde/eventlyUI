import styled from "styled-components";
import { Img } from "../../styles/styles.styled";

export const Logotip = styled(Img)`
width: 8rem;
height: fit-content;
object-fit: contain;
scale: ${props => props.scale || '100%'};
padding: 3rem 0;
@media (min-width: 820px) {
    padding: 1rem 0;
}
`