import { Col } from "../../styles/styles.styled"
import { EventContent } from "./EventContent"
import { EventNav } from "./EventNav"

export const ModuleContent = ({callback, tabContent, event, field}) => {

    return(
        <Col>
            <EventNav callback={callback} tabContent={tabContent}/>
            <EventContent event={event} field={field}/>
        </Col>
    )
}