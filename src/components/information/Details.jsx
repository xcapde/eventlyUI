import { Col, Title } from "../../styles/styles.styled"
import { Info } from "./Info"

export const Details = ({ event }) => {
    return (
        <Col style={{gap:'10%', height: '75%', alignItems:'flex-start'}}>
            <Title>{event.title}</Title>
            <Info event={event}/>
        </Col>
    )
}