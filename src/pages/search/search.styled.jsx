import styled from "styled-components";
import { Input } from "../../components/forms/form.styled";

export const Searcher = styled.form`
    width: 85%;
    height: var(--input-height);
    position:relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    & input{
        width: 100%;
        padding-left: 3.5rem;
        margin: 0 0.5rem 0 0;
    }
    &:hover button{
        color: var(--color-detail-icon);
    }
`