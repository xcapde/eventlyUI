import { Col, Row, Wrapper } from "../../styles/styles.styled"
import { Avatar } from "../avatar/Avatar"
import { InfoText } from "./InfoText"

export const ModuleDetails = ({ event, participations }) => {

    return (
        <Col height='auto' style={{ alignItems: 'flex-start' }}>
            <Row>
                <Col width='80%'>
                    <InfoText event={event} />
                </Col>
                <Col width='20%'>
                    <Avatar imgUrl={event.publisher.avatar} scale='1.5' />
                </Col>
            </Row>
            <Wrapper style={{ padding: '0.75rem' }}>
                <span>count: {event.participantsCount}</span>
                {participations && participations.length > 0 && participations.map((p, key) => (<span key={key}>{p.participant.username}</span>))}
            </Wrapper>
        </Col>
    )
}