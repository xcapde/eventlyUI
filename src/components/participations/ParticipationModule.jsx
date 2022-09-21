import React from "react"
import { DetailText, Row } from "../../styles/styles.styled"
import { ParticipationAvatar } from "./ParticipationAvatar"
import { PartsCounter, Wrapper } from "./participations.styled"


export const ParticipationModule = ({ participations, participantsCount }) => {
    return (
        <Wrapper>
            {participantsCount > 0 &&
                <React.Fragment>
                    <Row marginLeft='38px'>
                        {participations && participations.map((participation, key) => (
                            key <= 5 && <ParticipationAvatar key={key} participation={participation} left={key !== 0 ? `-${key * 17}px` : '0px'} />
                        ))}
                        {participations &&
                            participantsCount >= 3 &&
                            <PartsCounter left={`${-(participations.length) * 17}px`}>{participantsCount}</PartsCounter>}
                    </Row>
                    {/* <DetailText>{participantsCount} people joined</DetailText> */}
                </React.Fragment>
            }
        </Wrapper>
    )
}