import { Col, Title } from "../../styles/styles.styled"
import { MidCard } from "../cards/MidCard"
import { FeedTitle, VerticalFeed } from "./feed.styled"

export const ModuleVerticalMainCard = ({ title, events, width }) => {

    return (
        <Col height='100%'>
            <FeedTitle>{title}</FeedTitle>
            <VerticalFeed>
                {events && events.map((event, key) =>
                    <MidCard key={key} event={event} width={width} />
                )}
            </VerticalFeed>
        </Col>
    )
}