import styled from "styled-components";


//Flex model
export const Col = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    gap: ${props => props.gap || 'none'};
    padding: ${props => props.padding || '0'};
    margin: ${props => props.margin || '0'};
    font-size: ${props => props.fontSize || 'inherit'};
`;

export const Row = styled(Col)`
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
    height: 90vh;
    width: 100vw;
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    align-self: flex-start;
    @media (min-width: 820px) {
        height: 100vh;
        width: 95vw;
        margin-left: 5%;
    }
`;

export const Wrapper = styled(Col)`
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
    gap: ${props => props.gap || '1%'};
    background-color: ${props => props.backgroundColor || 'inherit'};
    justify-content: ${props => props.justifyContent || 'center'};
`;

export const Touchable = styled(Col)`
    height: ${props => props.height || 'inherit'};
    width: ${props => props.width || 'inherit'};
`;

//Text
export const Title = styled.h1`
    color: var(--color-title-text);
    font-family: var(--title-font);
    font-size:${props => props.fontSize || 'var(--font-size-card-title)'};
    font-weight: 400;
    margin: ${props => props.margin || '0'};
    width: 100%;
`

export const DetailText = styled.p` 
    color: var(--color-detail-text);
    font-family: var(--detail-font);
    text-transform: capitalize;
    font-size:${props => props.fontSize || 'var(--font-size-detall-text)'};
    font-weight: 500;
    margin:${props => props.margin || '0'};
    & i{
        color: var(--color-card-icon);
    }
`
/*IMAGES*/
export const Img = styled.img.attrs(props => ({
    src: props.imgUrl,
}))`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: relative;
`;

export const Gradient = styled(Col)`
    z-index: var(--index-gradient);
    background: linear-gradient(10deg,#000000db,#0000004d,#00000020,#00000001);
    border-radius: var(--card-radius);
    position: absolute;
    bottom: 0;
`
