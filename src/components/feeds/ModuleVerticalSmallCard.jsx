import { Col, DetailText } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { FeedTitle, VerticalFeed } from "./feed.styled"

export const ModuleVerticalSmallCard = ({ title, events, height }) => {

    return (
        <Col height={height}>
            <FeedTitle>{title}</FeedTitle>
            <VerticalFeed>
                {events && events.length > 0 ?
                    events.map((event, key) =>
                        <SmallCard key={key} event={event} />
                    ).reverse()
                    :
                    <Col>
                        <DetailText>There are no {title.toLowerCase()} events.</DetailText>
                    </Col>
                }
            </VerticalFeed>
        </Col>
    )
}