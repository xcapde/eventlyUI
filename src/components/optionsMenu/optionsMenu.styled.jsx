import styled from "styled-components";
import { Box } from "../../styles/styles.styled";

export const MenuBox = styled(Box)`
    z-index: var(--index-options-menu);
    border-radius: var(--card-radius);
    color: var(--color-white);
    position: absolute;
    bottom: 0;
    background-color: var(--color-menu-box);
`