import { Col, DetailText } from "../../styles/styles.styled"
import { MainCard } from "../cards/MainCard"
import { FeedTitle, HorizontalFeed } from "./feed.styled"

export const ModuleHorizontalMainCard = ({ title, events }) => {

    return (
        <Col justifyContent="flex-start" height='fit-content'>
            <FeedTitle>{title}</FeedTitle>
            <HorizontalFeed height='var(--moduleHorizontal-MainCard-height)'>
                {events && events.length > 0 ?
                    events.map((event, key) =>
                        <MainCard key={key} event={event} />
                    ).reverse()
                    :
                    <Col>
                        <DetailText>There are no {title.toLowerCase()} events.</DetailText>
                    </Col>
                }
            </HorizontalFeed>
        </Col>
    )
}