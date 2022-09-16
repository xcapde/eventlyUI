import { Col, Title } from "../../styles/styles.styled"
import { MidCard } from "../cards/MidCard"
import { FeedTitle, HorizontalFeed } from "./feed.styled"

export const ModuleHorizontalMidCard  = ({title, events}) => {

    return(
        <Col justifyContent="flex-start" height='fit-content'>
            <FeedTitle>{title}</FeedTitle>
            <HorizontalFeed height='var(--moduleHorizontal-MidCard-height)'>
                {events && events.map((event, key) =>
                    <MidCard key={key} event={event} />
                ).reverse()}                        
            </HorizontalFeed>
        </Col>
    )
}