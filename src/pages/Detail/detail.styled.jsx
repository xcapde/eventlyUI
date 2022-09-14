import styled from "styled-components";
import { Col } from "../../styles/styles.styled";

export const ImgCntrl = styled.div`
    height: var(--detail-image-height);
    width: 100%;
`

export const PageCntrl = styled(Col)`
    @media(min-width: 820px){
        height: 100vh;
        width:60%;
        display: flex;
    }
`
export const SideControl = styled(Col)`
    display:none;
    @media(min-width: 820px){
        width: 20%;
        display: flex;
        justify-content: flex-start;
        opacity: 0.8;
    }
`