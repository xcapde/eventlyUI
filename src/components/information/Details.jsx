import { Col } from "../../styles/styles.styled"
import { Location, Participation, Url } from "../subcomponents"
import { Schedule } from "../subcomponents/Schedule"

export const Details = ({ event }) => {
    return (
        <Col>
        <Schedule event={event}/>
        {event.type === "online" ?
            <Url event={event} /> : <Location event={event} />}
        <Participation event={event}/>
        </Col>
    )
}