import { Col, Title } from "../../styles/styles.styled"
import { SmallCard } from "../cards/SmallCard"
import { VerticalFeed } from "./feed.styled"

export const ModuleVerticalSmallCard = ({events}) => {

    return(
        <Col style={{ height:'auto', overflowY: "scroll" }}>
            <Title>Offline</Title>
            <VerticalFeed height='var(--moduleVertical-SmallCard-height)' style={{gap:'0.5rem'}}>
                {events && events.filter(event => event.type.includes('offline')).map((event, key) =>
                    <SmallCard key={key} event={event} />
                ).reverse()}                               
            </VerticalFeed>
        </Col>
    )
}