import styled from "styled-components";
import { Img } from "../../styles/styles.styled";

export const AvatarImg = styled(Img)`
    border-radius: var(--avatar-radius);
    width: var(--avatar-size);
    height: var(--avatar-size);
    scale: ${props => props.scale || '100%'};
    object-fit: cover;
    position:${props => props.position || 'relative'};
    top:${props => props.top || 'none'};
    right:${props => props.right || 'none'};
    left:${props => props.left || 'none'};
    bottom:${props => props.bottom || 'none'};
`