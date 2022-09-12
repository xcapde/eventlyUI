import styled from "styled-components";


//Flex model
export const Col = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
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
    height: 80vh;
    width: 100vw;
    position: fixed;
    top: 10vh;
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    align-self: flex-start;
    @media (min-width: 820px) {
        height: 100vh;
        width: 95vw;
        top:0;
        margin-left: 5vw;
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
    width: 100%;
    display: flex;
    align-items: center;
    color: var(--color-title-text);
    font-family: var(--title-font);
    font-size:var(--font-size-card-title);
    font-weight: 600;
`

export const DetailText = styled.p` 
    color: var(--color-secondary-text);
    font-family: var(--detail-font);
    font-size:var(--font-size-secondary-text);
    font-weight: 400;

    & i{
        color: var(--color-card-icon);
        margin-right: 10px;
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
