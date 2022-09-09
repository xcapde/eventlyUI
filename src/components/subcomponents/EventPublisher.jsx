import React from "react"
import { Col } from "../../styles/styles.styled"
import { Avatar } from "./Avatar"
import { EventPublisherName } from "./EventPublisherName"

export const EventPublisher = ({event, scale}) => {
    return (
        <Col width={'35%'} alignItems={'flex-end'}>
            {event && event.publisher?
                <React.Fragment>
                    <Avatar imgUrl={event.publisher.avatar} scale={scale}/>
                    <EventPublisherName event={event}/>
                </React.Fragment>
                : ''}
        </Col>
    )
}