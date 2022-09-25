import { DetailText } from "../../../styles/styles.styled"
import { DetailTitle } from "../../../views/detail/detail.styled"
import { Avatar } from "../../avatar/Avatar"
import { JoinButton } from "../../buttons"
import { Details } from "../../information/Details"
import { MainDetailCnt } from "../modules.styled"

export const MainDetailDesktop = ({ event, join, unjoin }) => {
    return (
        <MainDetailCnt>
            <DetailTitle>{event.title}</DetailTitle>
            <Details event={event} fontSize={'var(--font-size-detail-detailDesktop)'} />
            <Avatar imgUrl={event.publisher.avatar} publisher={event.publisher} size={'calc(var(--avatar-size) * 1.5)'} />
            <DetailText>{event.publisher.username}</DetailText>
            <JoinButton content={event.participant ? "Unjoin" : "Join"} callback={() => event.participant ? unjoin() : join()} color={event.participant ? "var(--button-unjoin)" : ""} />
        </MainDetailCnt>
    )
}