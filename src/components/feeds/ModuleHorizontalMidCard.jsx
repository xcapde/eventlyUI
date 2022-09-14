import { Col, Title } from "../../styles/styles.styled"
import { MidCard } from "../cards/MidCard"
import { HorizontalFeed } from "./feed.styled"

export const ModuleHorizontalMidCard  = ({events}) => {

    return(
        <Col height='60%'>
            <Title>Offline</Title>
            <HorizontalFeed height='var(--moduleHorizontal-MidCard-height)'>
                {events && events.filter(event => event.type.includes('offline')).map((event, key) =>
                    <MidCard key={key} event={event} />
                ).reverse()}                        
            </HorizontalFeed>
        </Col>
    )
}