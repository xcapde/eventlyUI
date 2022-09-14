import { Col } from "../../styles/styles.styled"
import { Location, Url } from "../subcomponents"
import { Schedule } from "../subcomponents/Schedule"

export const Details = ({ event }) => {
    return (
        <Col style={{gap:'0.75rem'}}>
            <Schedule event={event}/>
            {event.type === "online" ?
            <Url event={event} /> : <Location event={event} />}
        </Col>
    )
}