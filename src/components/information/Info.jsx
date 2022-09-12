import { Col, Row } from "../../styles/styles.styled"
import { Date, Location, Time, Url } from "../subcomponents"

export const Info = ({ event }) => {
    return (
        <Col style={{gap:'20%', alignItems:'flex-start'}}>
            <Row style={{height:'unset', gap:'15%', justifyContent:'flex-start'}}>
                <Date event={event} />
                <Time event={event} />
            </Row>
            {event.type === "online" ?
                <Url event={event} /> : <Location event={event} />}
        </Col>
    )
}