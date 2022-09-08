import { Col, Row } from "../../styles/styles.styled"
import { EventPublisher, EventTitle } from "../subcomponents"
import { EventDetails } from "./EventDetails"

export const ModuleDetails = ({event}) => {
    return(
        <Row alignItems={'flex-start'}>
            <Col gap={'1rem'}>
                <EventTitle title={event.title} fontSize={'var(--font-size-detall-title)'}/>
                <EventDetails event={event}/>
            </Col>
            <EventPublisher event={event} scale={'0.7'}/>
        </Row>
    )
}