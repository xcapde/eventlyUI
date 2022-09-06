import styled from "styled-components";


//Flex model
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Row = styled(Col)`
    flex-direction: row;
    width: ${props => props.width || '100%'};
`;

export const ExtremsRow = styled(Row)`
    justify-content: space-between;
`

//Pages
export const Page = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

export const View = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: center;
    align-self: flex-start;
    @media (min-width: 820px) {
        height: 100%;
        width: 95%;
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

export const Img = styled.img.attrs(props => ({
    src: props.imgUrl,
}))`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

export const Gradient = styled.div`
    /* background: linear-gradient(10deg, #00000030,  #00000050,  #00000020, #00000001); */
    background: linear-gradient(10deg, #00000030,  #0000006f,  #00000020, #00000001);
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--card-radius);
`

export const BlurEffect = styled.div`
    z-index: 1;
    backdrop-filter: blur(100px);
    width:100%;
    height: 100%;
    position: absolute;
    top: 0;
`

export const AvatarImg = styled.img.attrs(props => ({
    src: props.imgUrl,
}))`
    border-radius: var(--avatar-radius);
    width: var(--avatar-width);
    height: var(--avatar-height);
    scale: ${props => props.scale || '100%'};
    object-fit: cover;
`;

export const AvatarOnImg = styled(AvatarImg)`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem; 
`

export const Title = styled.h1`
    color: var(--color-title-text);
    font-weight: 700;
    font-size:var(--font-size-card-title);
    padding-right: 0.3rem;
`;

export const DetailText = styled.p` 
    color: var(--color-detail-text);
`;

export const PageHeader = styled.div`
    z-index: var(--index-header);
    position: fixed;
    top:0;
    height: var(--header-height);
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 3%;
`;
