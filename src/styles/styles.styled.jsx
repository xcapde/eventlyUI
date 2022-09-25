import styled from "styled-components";
//Breakpoints 
export const Breakpoint = {
    xs: '600px',
    md: '820px',
  };

//Flex model
export const Col = styled.div`
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    gap: ${props => props.gap || 'unset'};
    padding: ${props => props.padding ||'unset'};
`;

export const Row = styled(Col)`
    max-width: ${props => props.maxWidth || '100%'};
    flex-direction: row;
    margin-left: ${props => props.marginLeft || '0'};
`;


//Pages
export const Page = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: ${props => props.alignment || 'center'} ;
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
    @media (min-width:${Breakpoint.md}) {
        top: ${props => props.topD || 0};
        height: ${props => props.heightD || '100%'};
        width: calc( 100% - 5rem);
        margin-left: 5rem;
    }
`;


export const NoNavView = styled(View)`
    height: calc(100% - var(--footer-height));
    width: 100%;
    top: 0;
    align-items: flex-start;
    display: ${props => props.displayM || 'flex'};
    @media(min-width:${Breakpoint.md}){
        height: 100%;
        width: calc( 100% - 5rem);
        margin-left: 5rem;
        display: ${props => props.displayD || 'flex'};
    }
`;

export const Wrapper = styled(Col)`
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
    position: ${props => props.position || 'relative'};
    gap: ${props => props.gap || '1%'};
    background-color: ${props => props.backgroundColor || 'inherit'};
    justify-content: ${props => props.justifyContent || 'center'};
    border-radius: ${props => props.borderRadius || 'none'};
`;

export const Touchable = styled(Col)`
    height: ${props => props.height || 'inherit'};
    width: ${props => props.width || 'inherit'};
    z-index: ${props => props.zIndex || 'inherit'};
    position: ${props => props.position || 'inherit'};
`;

//Text
export const Title = styled.h1`
    height: ${props => props.height || 'initial'};
    width: 100%;
    display: flex;
    align-items: center;
    color: var(--color-title-text);
    font-family: var(--title-font);
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-title);
`;

export const DetailText = styled.p` 
    width: ${props => props.width ||'initial'};
    color: var(--color-detail-text);
    font-family: ${props => props.fontFamily ||'var(--detail-font)'};
    font-size: var(--font-size-detail);
    font-weight: ${props => props.fontWeight ||'var(--font-weigth-detail)'};
    text-align: ${props => props.textAlign || 'inherit'};
    text-transform: ${props => props.textTransform || 'initial'};
    line-height: ${props => props.lineHeight ||'normal'};
    @media(min-width:${Breakpoint.md}){
        font-size: ${props => props.fontSize ||'var(--font-size-detail-desktop)'};
    }
`;
export const DetailIcon = styled(DetailText)`
    width: ${props => props.width || 'unset'};
    padding-right: 0.5rem;
    color: var(--color-detail-icon);
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

/*Images*/
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

export const Img = styled.img.attrs(props => ({
    src: props.imgUrl,
}))`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
`;


