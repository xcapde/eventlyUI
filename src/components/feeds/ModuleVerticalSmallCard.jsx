import { Col, DetailText } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { FeedTitle, VerticalFeed } from "./feed.styled"

export const ModuleVerticalSmallCard = ({ title, events, height }) => {

    return (
        <Col width='unset' height={height}>
            <FeedTitle>{title}</FeedTitle>
            {events && events.length > 0? 
            <VerticalFeed>
                    {events.map((event, key) =>
                        <SmallCard key={key} event={event} />
                    ).reverse()}
            </VerticalFeed>
            :
            <Col>
                <DetailText>There are no {title.toLowerCase()} events.</DetailText>
            </Col>
            }
        </Col>
    )
}