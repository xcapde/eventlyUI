import styled from "styled-components";
import { Breakpoint, Img } from "../../styles/styles.styled";

export const Logotip = styled(Img)`
width: 4rem;
height: fit-content;
object-fit: contain;
scale: ${props => props.scale || '100%'};
@media (min-width:${Breakpoint.md}) {
    padding: 1rem 0;
}
`