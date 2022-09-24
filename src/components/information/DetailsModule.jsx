import { Col, Row } from "../../styles/styles.styled"
import { Avatar } from "../avatar/Avatar"
import { ParticipationModule } from "../participations/ParticipationModule"
import { Details } from "./Details"

export const DetailsModule = ({ event, participations, gap, display, height }) => {

    return (
        <Col alignItems="flex-start" height={height}>
            <Row height="50%">
                <Col width='80%'>
                    <Details event={event} gap={gap} />
                </Col>
                <Col width='20%'>
                    <Avatar imgUrl={event.publisher.avatar} publisher={event.publisher} scale='1.5' />
                </Col>
            </Row>
            <ParticipationModule participations={participations} participantsCount={event.participantsCount} display={display} />
        </Col>
    )
}