import styled from "styled-components";
import { Col } from "../../styles/styles.styled";

export const Wrapper = styled(Col)`
    height: ${props => props.height || '55px'};
    width: fit-content;
    display: ${props => props.display || 'flex'};
    align-self: center;
    gap: 5px;
    margin: 0 auto;
`;

export const PartsCounter = styled.div`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: var(--color-main);
    color: var(--color-white);
    font-family: var(--detail-font);
    font-size: x-small;
    text-align: center;
    line-height: 17px;
    position: relative;
    bottom: -10px;
    left: ${props => props.left || '0px'};
    scale: 1.1;
`;

