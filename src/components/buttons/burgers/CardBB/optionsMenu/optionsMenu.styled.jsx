import styled from "styled-components";
import { Col } from "../../styles/styles.styled";

export const MenuBox = styled(Col)`
    z-index: var(--index-options-menu);
    border-radius: var(--card-radius);
    color: var(--color-white);
    position: absolute;
    height:var(--menu-box-height);
    width:${props => props.width || '100%'};
    bottom: 0;
    background-color: var(--color-menu-box);
`