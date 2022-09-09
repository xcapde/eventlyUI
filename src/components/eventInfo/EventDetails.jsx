import { Col, Row } from "../../styles/styles.styled"
import { EventDate, EventLocation, EventTime, EventUrl } from "../subcomponents"

export const EventDetails = ({ event, justifyContent }) => {
    return (
        <Col alignItems={'space-between'} justifyContent={justifyContent}>
            <Row justifyContent='flex-start' height={'unset'} width={'95%'} gap={'5%'} padding={'0 0 0.8rem 0'} margin={'0 auto'}>
                <EventDate date={event.date} />
                <EventTime hour={event.hour} />
            </Row>
            {event.type === "online" ?
                <EventUrl /> : <EventLocation location={event.location} />}
        </Col>
    )
}