import { useState } from "react"
import { useEffect } from "react"
import { Col, DetailText } from "../../styles/styles.styled"
import { MidCard } from "../cards/MidCard"
import { FeedTitle, VerticalFeed } from "./feed.styled"

export const ModuleVerticalMainCard = ({ title, events, width, justify }) => {

    const [content, setContent] = useState('There are no events');

    useEffect(() => {
        setContent(title.includes('tag') ? content + " with this tag" : content + ".")
    }, [content, title])

    return (
        <Col>
            <FeedTitle>{title}</FeedTitle>
            <VerticalFeed justify={justify}>
                {events && events.length > 0 ?
                    events.map((event, key) =>
                        <MidCard key={key} event={event} width={width} />
                    ) :
                    <DetailText>{content}</DetailText>
                }
            </VerticalFeed>
        </Col>
    )
}