import React from "react"
import { Col, DetailText, Row } from "../../styles/styles.styled"
import { ParticipationAvatar } from "./ParticipationAvatar"
import { PartsCounter } from "./participations.styled"


export const ParticipationModule = ({ participations, participantsCount }) => {
    return (
        <Col>
            {participantsCount > 0 &&
                <React.Fragment>
                    <Row style={{ position: 'relative', margin: "2.5% auto", height: '30px', backgroundColor: 'transparent', width: 'fit-content' }}>
                        {participations && participations.map((participation, key) => (
                            key <= 5 && <ParticipationAvatar key={key} participation={participation} left={key !== 0 ? `-${key * 12}px` : '0px'} />
                        ))}
                        {participations &&
                            participantsCount >= 3 &&
                            <PartsCounter left={`${-(participations.length) * 12}px`}>{participantsCount}</PartsCounter>}
                    </Row>
                    <DetailText>{participantsCount} people joined</DetailText>
                </React.Fragment>
            }
        </Col>
    )
}