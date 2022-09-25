import styled from "styled-components";
import { Col, DetailText } from "../../styles/styles.styled";
import { DetailTitle } from "../../views/detail/detail.styled";
import { AvatarImg } from "../avatar/avatar.styled";
import { JoinBtn } from "../buttons/buttons.styled";
import { VerticalFeedDesktop } from "../feeds/feed.styled";

export const MainDetailCnt = styled.div`
    height: 75% !important;
    width: fit-content;
    /* max-width: 100%; */
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    justify-self: start !important;
    align-self: center;
    margin-left: 1.75rem;
    padding: 1rem;
    & > ${DetailText}, div > ${DetailText}{
        color: var(--color-dark);
    }
    & > ${DetailTitle}{
        grid-column: 1/6;
        grid-row: 1/2;
        padding: 0;
        align-self: center;
    }
    & > ${Col}{
        grid-column: 1/4;
        grid-row: 2/4;
    }
    & > ${AvatarImg}{
        grid-column: 5/6;
        grid-row:  2/3;
        justify-self: center;
    }
    & > ${DetailText}{
        grid-column: 5/6;
        grid-row: 3/3;
        align-self: center;
        text-align: center;
    }
    & > ${JoinBtn}{
        grid-column: 1/6;
        grid-row: 5/6;
        justify-self: center;
    }
`;

export const ParticipantsDetailCnt = styled.div`
    height: 75% !important;
    align-self: flex-start;
    justify-self: start !important;
    align-self: center;
    margin-left: 1.75rem;
    width: 65%;
    padding: 1rem;
    & > ${Col}{
        height: 83%;
        & > ${VerticalFeedDesktop}{
            ::-webkit-scrollbar {
            display: none;
            }
        }
    }
`;