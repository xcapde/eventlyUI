import { TitleCard } from "../../cards/cards.styled";
import { ModuleVerticalUserCard } from "../../feeds/ModuleVerticalUserCard";
import { ParticipantsDetailCnt } from "../modules.styled";

export const ParticipantsDetailDesktop = ({ participations, event }) => {
    return (
        <ParticipantsDetailCnt>
            <TitleCard>{event.participantsCount === 0 ? `Be the first to join!`
                : event.participantsCount === 1 ? `${event.participantsCount} person joined!`
                    : `${event.participantsCount} people joined!`}</TitleCard>
            <ModuleVerticalUserCard participations={participations} />
        </ParticipantsDetailCnt>
    )
}