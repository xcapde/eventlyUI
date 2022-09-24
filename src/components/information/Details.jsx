import { Col } from "../../styles/styles.styled"
import { Location, Participation, Url } from "../subcomponents"
import { Schedule } from "../subcomponents/Schedule"

export const Details = ({ event, fontSize }) => {
    return (
        <Col alignItems="flex-start">
            <Schedule event={event} fontSize={fontSize}/>
            {event.type === "online" ?
                <Url event={event} fontSize={fontSize} /> : <Location event={event} fontSize={fontSize}/>}
            <Participation event={event} fontSize={fontSize}/>
        </Col>
    )
}