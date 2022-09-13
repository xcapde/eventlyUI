import { Col, Title } from "../../styles/styles.styled"
import { Details } from "./Details"

export const InfoText = ({event}) => {
    return(
        <Col style={{gap:'1rem'}}>
            <Title >{event.title}</Title>
            <Details event={event}/>
        </Col>
    )
}