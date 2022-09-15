import { Col, Title } from "../../styles/styles.styled"
import { MidCard } from "../cards/MidCard"
import { HorizontalFeed } from "./feed.styled"

export const ModuleHorizontalMidCard  = ({title, events}) => {

    return(
        <Col height='60%'>
            <Title>{title}</Title>
            <HorizontalFeed height='var(--moduleHorizontal-MidCard-height)'>
                {events && events.map((event, key) =>
                    <MidCard key={key} event={event} />
                )}                        
            </HorizontalFeed>
        </Col>
    )
}