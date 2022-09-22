import { Col, DetailText } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { FeedCnt, NotiFeedTitle, ScheduleFeed } from "./feed.styled"

export const ByDateFeed = ({ events, date }) => {
    return (
        <FeedCnt height="95%" margin="auto 0">
            <NotiFeedTitle>Your personal schedule</NotiFeedTitle>
            {events && events.length > 0 ?
                <ScheduleFeed>
                    {events.map((event, key) => (
                        <SmallCard key={key} event={event} />
                    ))}
                </ScheduleFeed> :
                <Col>
                    <DetailText>No planned events for {date}</DetailText>
                </Col>
            }
        </FeedCnt>
    )
}