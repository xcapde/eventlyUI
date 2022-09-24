import styled from "styled-components";
import { Img } from "../../styles/styles.styled";

export const AvatarImg = styled(Img)`
    border-radius: var(--avatar-radius);
    width: ${props => props.size || 'var(--avatar-size)'};
    height: ${props => props.size || 'var(--avatar-size)'};
    scale: ${props => props.scale || '100%'};
    object-fit: cover;
    position:${props => props.position || 'relative'};
    top:${props => props.top || 'unset'};
    right:${props => props.right || 'unset'};
    left:${props => props.left || 'unset'};
    bottom:${props => props.bottom || 'unset'};
`