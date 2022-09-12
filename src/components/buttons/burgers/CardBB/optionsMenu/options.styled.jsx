import styled from "styled-components";
import { Col } from "../../../../../styles/styles.styled";

export const OptionsCnt = styled(Col)`
    height:var(--options-cnt-height);
    width:var(--options-cnt-width);
    position: absolute;
    top: 10%;
    background-color: var(--color-options-cnt);
    color: var(--color-options-text);
    border-radius: var(--card-radius);
    z-index: var(--index-options);
    gap: 10%;
`