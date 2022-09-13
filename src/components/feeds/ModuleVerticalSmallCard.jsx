import { Col, Title } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { VerticalFeed } from "./feed.styled"

export const ModuleVerticalSmallCard = ({events}) => {

    return(
        <Col height='25%'>
            <Title style={{padding:'0.75rem'}}>Offline</Title>
            <VerticalFeed height='var(--moduleVertical-SmallCard-height)'>
                {events && events.filter(event => event.type.includes('offline')).map((event, key) =>
                    <SmallCard key={key} event={event} />
                ).reverse()}                               
            </VerticalFeed>
        </Col>
    )
}