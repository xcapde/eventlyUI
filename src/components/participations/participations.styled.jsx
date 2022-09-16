import styled from "styled-components";


//Flex model
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