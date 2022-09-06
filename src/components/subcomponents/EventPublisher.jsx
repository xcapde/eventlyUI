import React from "react"
import { AvatarImg, DetailText } from "../../styles/styles.styled"

export const EventPublisher = ({publisher}) => {
    return (
        <React.Fragment>
            <AvatarImg imgUrl={publisher.avatar}/>
            <DetailText>
                {publisher.username}
            </DetailText>
        </React.Fragment>
    )
}