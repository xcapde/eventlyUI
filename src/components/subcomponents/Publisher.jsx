import React from "react"
import { Col, DetailText, Wrapper } from "../../styles/styles.styled"
import { Avatar } from "../avatar/Avatar"

export const Publisher = ({event, scale}) => {
    return (
        <Wrapper width={'30vw'}>
            {event && event.publisher?
                <Col>
                    <Avatar imgUrl={event.publisher.avatar} scale={scale}/>
                    <DetailText>
                        {event.publisher.username}
                    </DetailText> 
                </Col>
                : ''}   
        </Wrapper>
    )
}