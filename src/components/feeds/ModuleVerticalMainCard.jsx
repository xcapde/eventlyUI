import { Col, Title } from "../../styles/styles.styled"
import { MainCard } from "../cards/MainCard"
import { VerticalFeed } from "./feed.styled"

export const ModuleVerticalMainCard = ({events}) => {

    return(
        <Col style={{ gap: '3%', height: '100%', overflowY: "scroll" }}>
            <Title>Online</Title>
            <VerticalFeed>
                {events && events.filter(event => event.type.includes('online')).map((event, key) =>
                    <MainCard key={key} event={event} />
                ).reverse()}                        
            </VerticalFeed>
        </Col>
    )
}