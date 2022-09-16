import { Col, Row } from "../../styles/styles.styled"
import { ParticipationAvatar } from "./ParticipationAvatar"


export const ParticipationModule = ({ participations }) => {
    return (
        <Row style={{ position: 'relative', margin: "2.5% auto", height: '30px', backgroundColor:'transparent' }}>
            {participations && participations.map((participation, key) => (
                <ParticipationAvatar key={key} participation={participation} left={key !== 0 ? `-${key*12}px` : '0px'} />
            ))}
        </Row>
    )
}