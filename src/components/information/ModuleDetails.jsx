import { Col, Row, Wrapper } from "../../styles/styles.styled"
import { Avatar } from "../avatar/Avatar"
import { InfoText } from "./InfoText"

export const ModuleDetails = ({ event }) => {
    return (
        <Col height='auto' style={{alignItems:'flex-start'}}>
            {/*MAIN CARD NECESSITA  width: '90%', padding:'1rem 0' */}
            <Row>
                <InfoText event={event}/>
                <Avatar imgUrl={event.publisher.avatar} scale='0.8'/>
            </Row>
            <Wrapper>
                <br/>Component avatars
            </Wrapper>
        </Col>
    )
}