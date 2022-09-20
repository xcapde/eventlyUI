import styled from "styled-components";


//Flex model
export const Col = styled.div`
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    gap: ${props => props.gap || 'unset'};
`;

export const Row = styled(Col)`
    max-width: ${props => props.maxWidth || '100%'};
    flex-direction: row;
`;


//Pages
export const Page = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const View = styled.section`
    height: ${props => props.height || '80vh'};
    width: 100vw;
    position: fixed;
    top: 10vh;
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    align-self: flex-start;
    z-index: ${props => props.index || 'inherit'};
    @media (min-width: 820px) {
        height: 100vh;
        width: 95vw;
        top:0;
        margin-left: 5vw;
    }
`;


export const NoNavView = styled(View)`
    height: calc(100% - var(--footer-height));
    width: 100%;
    top: 0;
    align-items: flex-start;
    @media(min-width: 820px){
        height: 100%;
        width: 100%;
    }
`;

export const Wrapper = styled(Col)`
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
    position: ${props => props.position || 'relative'};
    gap: ${props => props.gap || '1%'};
    background-color: ${props => props.backgroundColor || 'inherit'};
    justify-content: ${props => props.justifyContent || 'center'};
`;

export const Touchable = styled(Col)`
    height: ${props => props.height || 'inherit'};
    width: ${props => props.width || 'inherit'};
    z-index: ${props => props.zIndex || 'inherit'};
    position: ${props => props.position || 'inherit'};
`;

//Text
export const Title = styled.h1`
    width: 100%;
    display: flex;
    align-items: center;
    color: var(--color-title-text);
    font-family: var(--title-font);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-title);
`;

export const DetailText = styled.p` 
    color: var(--color-detail-text);
    font-family: var(--detail-font);
    font-size:var(--font-size-detail);
    font-weight: var(--font-weigth-detail);
    text-align: ${props=> props.textAlign || 'inherit'};
    @media(min-width: 820px){
        font-size:var(--font-size-detail-desktop);
    }
`;
export const DetailIcon = styled(DetailText)`
    width: unset;
    padding-right: 0.5rem;
    color: var(--color-detail-icon);
`;

/*Images*/
export const Img = styled.img.attrs(props => ({
    src: props.imgUrl,
}))`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
`;

export const Gradient = styled.div` 
    height: 30%;
    width: 100%;
    position:absolute;
    top: 0;
    background: linear-gradient(0deg, #00000000, #00000007, #00000030);
    z-index: var(--index-gradient);
`;

export const FloatingCnt = styled(Col)`
    position: ${props => props.position || 'relative'};
    width: fit-content;
    max-width: 11rem;
    height: fit-content;
    top: ${props => props.top || 'unset'};
    left: ${props => props.left || 'unset'};
    bottom: ${props => props.bottom || 'unset'};
    right: ${props => props.right || 'unset'};
`;

/*Background*/
export const OpacityBackground = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top:0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: var(--card-shadow-opacity);
    z-index: var(--index-opacityBG);
`;
