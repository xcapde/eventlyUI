import { Col } from "../../styles/styles.styled"
import { Content } from "./Content"
import { Navigation } from "./Navigation"

export const ModuleContent = ({ callback, tabContent, event, field }) => {

    return (
        <Col >
            <Navigation callback={callback} tabContent={tabContent} field={field} />
            <Content event={event} field={field} />
        </Col>
    )
}