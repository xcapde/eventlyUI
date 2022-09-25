import { Col, DetailText } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { FeedTitle, VerticalFeedSmallCard } from "./feed.styled"

export const ModuleVerticalSmallCard = ({ title, events, height, width, padding }) => {

    return (
        <Col width={width} height={height} padding={padding}>
            <FeedTitle>{title}</FeedTitle>
            {events && events.length > 0? 
            <VerticalFeedSmallCard>
                    {events.map((event, key) =>
                        <SmallCard key={key} event={event} />
                    ).reverse()}
            </VerticalFeedSmallCard>
            :
            <Col>
                <DetailText>There are no {title.toLowerCase()} events.</DetailText>
            </Col>
            }
        </Col>
    )
}