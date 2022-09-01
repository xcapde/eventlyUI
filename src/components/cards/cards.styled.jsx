import styled from "styled-components";
import { Col} from "../../styles/styles.styled";

export const Card = styled(Col)`
    border: 1px solid black;
    justify-content: space-between;
    width: 12rem;
    height: 18rem;
    border-radius: var(--cardRadius);
    background-color: var(--primaryColor);
`;


export const ImageControl = styled.div`
    width: 10rem;
    height: 10rem;
    border-radius: var(--cardRadius);
    display: flex;
    align-content: center;
    margin: 2rem;
    
`;

export const ImageCard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--cardRadius);
`;


export const Title = styled.h1`
 

`;

export const TimeCard = styled.h2`
    
`;

export const Description = styled.h3`
    

`;

export const Participations = styled.h2`

`;

export const Avatar = styled.img`
    

`;