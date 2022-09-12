import React from "react"
import { Col, SecondaryText, Wrapper } from "../../styles/styles.styled"
import { Avatar } from "../avatar/Avatar"

export const Publisher = ({event, scale}) => {
    return (
        <Wrapper width={'30vw'}>
            {event && event.publisher?
                <Col>
                    <Avatar imgUrl={event.publisher.avatar} scale={scale}/>
                    <SecondaryText style={{fontSize:'smaller'}}>
                        {event.publisher.username}
                    </SecondaryText> 
                </Col>
                : ''}   
        </Wrapper>
    )
}