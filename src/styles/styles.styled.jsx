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
    width: 8rem;
    padding: 3rem 0;
`;

export const AvatarImg = styled.img.attrs(props => ({
    src: props.imgUrl,
}))`
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    scale: ${props => props.scale || '100%'};
`;

export const Title = styled.h1`
    color: var(--darkTextColor);
    font-weight: 600;
    padding: 0.3rem 0;
    font-size: smaller;
`; 

export const Location = styled.h2` 
    color: var(--detailsTextColor);
    font-size: small;
    width: 100%;
`;