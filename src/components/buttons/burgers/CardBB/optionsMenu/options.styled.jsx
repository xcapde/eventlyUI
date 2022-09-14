import styled from "styled-components";
import { Col } from "../../../../../styles/styles.styled";

export const OptionsCnt = styled(Col)`
    height:var(--options-cnt-height);
    width:var(--options-cnt-width);
    position: absolute;
    top: 3rem;
    right: 1.5rem;
    display: flex;
    align-items: flex-start;
    background-color: var(--color-white);
    box-shadow: 1px 2px 18px var(--card-shadow-opacity);
    border-radius: var(--options-radius);
    z-index: var(--index-options);
    & > button:nth-of-type(1){
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    & > button:nth-of-type(2){
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`