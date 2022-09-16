import { Col, DetailText } from "../../styles/styles.styled"
import { MidCard } from "../cards/MidCard"
import { FeedTitle, HorizontalFeed } from "./feed.styled"

export const ModuleHorizontalMidCard = ({ title, events }) => {

    return (
        <Col justifyContent="flex-start" height='fit-content'>
            <FeedTitle>{title}</FeedTitle>
            <HorizontalFeed height='var(--moduleHorizontal-MidCard-height)'>
                {events && events.length > 0 ?
                    events.map((event, key) =>
                        <MidCard key={key} event={event} />
                    ).reverse()
                    :
                    <DetailText>There are no {title.toLowerCase()} events.</DetailText>
                }
            </HorizontalFeed>
        </Col>
    )
}