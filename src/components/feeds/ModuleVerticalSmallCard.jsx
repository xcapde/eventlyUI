import { Col, Title } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { FeedTitle, VerticalFeed } from "./feed.styled"

export const ModuleVerticalSmallCard = ({title, events}) => {

    return(
        <Col height='25%'>
            <FeedTitle>{title}</FeedTitle>
            <VerticalFeed>
                {events && events.map((event, key) =>
                    <SmallCard key={key} event={event} />
                ).reverse()}                               
            </VerticalFeed>
        </Col>
    )
}