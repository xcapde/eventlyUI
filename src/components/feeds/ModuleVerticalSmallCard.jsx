import { Col, Title } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { VerticalFeed } from "./feed.styled"

export const ModuleVerticalSmallCard = ({events}) => {

    return(
        <Col height='25%'>
            <Title >Online</Title>
            <VerticalFeed>
                {events && events.filter(event => event.type.includes('online')).map((event, key) =>
                    <SmallCard key={key} event={event} />
                ).reverse()}                               
            </VerticalFeed>
        </Col>
    )
}