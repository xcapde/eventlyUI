import { Col, DetailText, Row, Wrapper } from "../../styles/styles.styled"
import { Avatar } from "../avatar/Avatar"
import { ParticipationModule } from "../participations/ParticipationModule"
import { Details } from "./Details"

export const ModuleDetails = ({ event, participations }) => {

    return (
        <Col height='auto' style={{ alignItems: 'flex-start' }}>
            <Row>
                <Col width='80%'>
                    <Details event={event} />
                </Col>
                <Col width='20%'>
                    <Avatar imgUrl={event.publisher.avatar} publisher={event.publisher} scale='1.5' />
                </Col>
            </Row>
            <Wrapper style={{ padding: '0.75rem' }}>
                <ParticipationModule participations={participations} participantsCount={event.participantsCount} />
            </Wrapper>
        </Col>
    )
}