import React from "react"
import { Col, DetailText, Row } from "../../styles/styles.styled"
import { ParticipationAvatar } from "./ParticipationAvatar"
import { PartsCounter, Wrapper } from "./participations.styled"


export const ParticipationModule = ({ participations, participantsCount }) => {
    return (
        <Wrapper>
            {participantsCount > 0 &&
                <React.Fragment>
                    <Row>
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
        </Wrapper>
    )
}