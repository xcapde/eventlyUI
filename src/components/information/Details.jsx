import { Row, Col } from "../../styles/styles.styled"
import { Date, Location, Time, Url } from "../subcomponents"

export const Details = ({ event }) => {
    return (
        <Col style={{gap:'1rem', alignItems:'flex-start'}}>
            <Row style={{gap:'3rem', justifyContent:'flex-start'}}>
                <Date event={event} />
                <Time event={event} />  
            </Row>
            {event.type === "online" ?
                <Url event={event} /> : <Location event={event} />}
        </Col>
    )
}