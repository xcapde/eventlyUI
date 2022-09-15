import { Col, Title } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { VerticalFeed } from "./feed.styled"

export const ModuleVerticalSmallCard = ({title, events}) => {

    return(
        <Col height='25%'>
            <Title >{title}</Title>
            <VerticalFeed>
                {events && events.map((event, key) =>
                    <SmallCard key={key} event={event} />
                )}                               
            </VerticalFeed>
        </Col>
    )
}