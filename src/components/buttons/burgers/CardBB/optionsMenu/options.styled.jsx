import styled from "styled-components";
import { Col } from "../../../../../styles/styles.styled";

export const OptionsCnt = styled(Col)`
    height:var(--options-cnt-height);
    width:var(--options-cnt-width);
    position: absolute;
    top: 3rem;
    right: 1.5rem;
    background-color: var(--color-options-cnt);
    box-shadow: 1px 2px 18px var(--card-shadow-opacity);
    color: var(--color-options-text);
    border-radius: var(--card-radius);
    border-top-right-radius:0;
    z-index: var(--index-options);
    gap: 10%;
`