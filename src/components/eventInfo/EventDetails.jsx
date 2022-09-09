import { Col } from "../../styles/styles.styled"
import { EventDate, EventLocation, EventTime, EventUrl } from "../subcomponents"

export const EventDetails = ({ event, justifyContent }) => {
    return (
        <Col alignItems={'space-between'} justifyContent={justifyContent}>
            <Col flexDirection='row' justifyContent='flex-start' height={'unset'} gap={'5%'} padding={'0 0 0.8rem 0'}>
                <EventDate date={event.date} />
                <EventTime hour={event.hour} />
            </Col>
            {event.type === "online" ?
                <EventUrl /> : <EventLocation location={event.location} />}
        </Col>
    )
}