import styled from "styled-components";
import { Breakpoint, View } from "../../styles/styles.styled";

export const LoginView = styled(View)`
    & form > button{
        position:relative !important;
        place-content: center;
    }
  
`;

export const LogoCntrl = styled.div`
    height: 20%;
    margin-bottom: 2.5rem;
    display: flex;
    align-items: flex-end;
    @media(min-width:${Breakpoint.md}){
        margin-bottom: 1rem;
        height:35%;
    }
`;