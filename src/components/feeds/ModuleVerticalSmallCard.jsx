import { Col, DetailText } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { FeedTitle, VerticalFeed } from "./feed.styled"

export const ModuleVerticalSmallCard = ({ title, events }) => {

    return (
        <Col height='30%'>
            <FeedTitle>{title}</FeedTitle>
            <VerticalFeed>
                {events && events.length > 0 ?
                    events.map((event, key) =>
                        <SmallCard key={key} event={event} />
                    ).reverse()
                    :
                    <DetailText>There are no {title.toLowerCase()} events.</DetailText>
                }
            </VerticalFeed>
        </Col>
    )
}