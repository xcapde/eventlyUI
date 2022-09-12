import { Col, Title } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { VerticalFeed } from "./feed.styled"

export const ModuleVerticalSmallCard = ({events}) => {

    return(
        <Col style={{ gap: '2.5%', height: '100%', overflowY: "scroll" }}>
            <Title>Offline</Title>
            <VerticalFeed>
                {events && events.filter(event => event.type.includes('offline')).map((event, key) =>
                    <SmallCard key={key} event={event} />
                ).reverse()}                               
            </VerticalFeed>
        </Col>
    )
}