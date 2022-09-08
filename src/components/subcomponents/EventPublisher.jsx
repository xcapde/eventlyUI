import React from "react"
import { AvatarImg, Col, DetailText } from "../../styles/styles.styled"

export const EventPublisher = ({event, scale}) => {
    return (
        <Col width={'35%'} alignItems={'flex-end'}>
            {event && event.publisher?
                <React.Fragment>
                    <AvatarImg imgUrl={event.publisher.avatar} scale={scale}/>
                    <DetailText>
                        {event.publisher.username}
                    </DetailText> 
                </React.Fragment>
                : ''}
        </Col>
    )
}