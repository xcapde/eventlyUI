import { Col, Row, Wrapper } from "../../styles/styles.styled"
import { Avatar } from "../avatar/Avatar"
import { Details } from "./Details"

export const ModuleDetails = ({ event }) => {
    return (
        <Col height='auto'>
            <Row>
                <Col width='80%'>
                    <Details event={event}/>
                </Col>
                <Col width='20%'>
                    <Avatar imgUrl={event.publisher.avatar} scale='1.2'/>
                </Col>
            </Row>
            <Wrapper style={{padding:'1rem', fontSize:'small'}}>
                Join Component
            </Wrapper>
        </Col>
    )
}