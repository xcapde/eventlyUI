import { Col } from "../../styles/styles.styled"
import { EventContent } from "./EventContent"
import { EventNav } from "./EventNav"

export const ModuleContent = ({action, tabContent, event, field}) => {
    return(
        <Col>
            <EventNav action={action} tabContent={tabContent}/>
            <EventContent event={event} field={field}/>
        </Col>
    )
}